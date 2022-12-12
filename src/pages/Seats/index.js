import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { SeatButton } from "../../components/SeatButton";
import { SeatNote } from "../../components/SeatNote";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";

import { api } from "../../services/api";

import { Container, SeatsContainer, NotesContainer } from "./styles";
import { Form } from "../../components/Form";
import { Loading } from "../../components/Loading";

export function Seats() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [CPFValue, setCPFValue] = useState("");

  const { idSessao } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/showtimes/${idSessao}/seats`)
      .then((response) => {
        setMovieData(response.data);
        setSeats(response.data.seats);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("ERROR: " + err);
      });
  }, [idSessao]);

  function selectSeat(id) {
    if (selectedSeats.includes(id)) {
      let arr = [...selectedSeats];
      const index = arr.indexOf(id);
      if (index > -1) {
        arr.splice(index, 1);
        setSelectedSeats([...arr]);
      }
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let userData = {
      ids: [...selectedSeats],
      name: name,
      CPF: CPFValue,
    };

    if (!CPFValue || CPFValue.length < 11 || CPFValue.length > 11) {
      return alert("Insira um número de CPF válido");
    } else if (!name) {
      return alert("Insira o seu nome");
    } else if (selectedSeats.length === 0) {
      return alert("Selecione ao menos uma cadeira");
    }

    let date = movieData.day.date;
    let time = movieData.name;
    let movieTitle = movieData.movie.title;

    api
      .post("/seats/book-many", userData)
      .then((response) => {
        navigate("/sucesso", {
          state: { movieTitle, date, time, selectedSeats, name, CPFValue },
        });
      })
      .catch((error) => console.log(error.response.data));
  }

  console.log(movieData);

  return (
    <Container>
      <Header />      
          <Title title={"Selecione o(s) assento(s)"} />

          <SeatsContainer>
            {seats.map((seat) => (
              <SeatButton
                key={seat.id}
                seatNumber={seat.name}
                isAvailable={seat.isAvailable}
                selectSeat={() => selectSeat(+seat.name)}
                isSelected={selectedSeats.includes(+seat.name)}
              />
            ))}
          </SeatsContainer>
          <NotesContainer>
            <SeatNote seatStatus={"Selecionado"} seatColor={"selected"} />
            <SeatNote seatStatus={"Disponível"} seatColor={"available"} />
            <SeatNote seatStatus={"Indisponível"} seatColor={"unavailable"} />
          </NotesContainer>

          <Form
            setName={setName}
            setCPFValue={setCPFValue}
            handleSubmit={handleSubmit}
          />

        <Footer
            movieImage={movieData.movie?.posterURL}
            movieTitle={movieData.movie?.title}
            selectedHour={`${movieData.day?.weekday} - ${movieData.name}`}
        />        
      
    </Container>
  );
}
