import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { SeatButton } from "../../components/SeatButton";
import { SeatNote } from "../../components/SeatNote";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import { Form } from "../../components/Form";
import { Loading } from "../../components/Loading";
import { ReturnButton } from "../../components/ReturnButton";

import { api } from "../../services/api";

import { Container, SeatsContainer, NotesContainer } from "./styles";

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

  function validateName(name) {
    let regex = /^[a-zA-Z ]{2,30}$/;

    return regex.test(name);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!CPFValue || CPFValue.length < 11 || CPFValue.length > 11) {
      return alert("Insira um número de CPF válido");
    } else if (!name || validateName(name) === false) {
      return alert("Insira o seu nome corretamente");
    } else if (selectedSeats.length === 0) {
      return alert("Selecione ao menos uma cadeira");
    }

    let date = movieData.day.date;
    let time = movieData.name;
    let movieTitle = movieData.movie.title;

    let userData = {
      ids: selectedSeats,
      name: name,
      cpf: CPFValue.toString(),
    };

    api
      .post("/seats/book-many", userData)
      .then(() => {
        navigate("/sucesso", {
          state: { movieTitle, date, time, selectedSeats, name, CPFValue },
        });
      })
      .catch((error) => console.log(error.response.data));
  }

  return (
    <Container>
      <Header />
      <ReturnButton />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title title={"Selecione o(s) assento(s)"} />
          <SeatsContainer>
            {seats.map((seat) => (
              <SeatButton
                key={seat.id}
                seatNumber={seat.name}
                isAvailable={seat.isAvailable}
                selectSeat={() => selectSeat(seat.id)}
                isSelected={selectedSeats.includes(seat.id)}
              />
            ))}
          </SeatsContainer>

          <NotesContainer>
            <SeatNote seatStatus={"Selecionado"} seatColor={"selected"} />
            <SeatNote seatStatus={"Disponível"} seatColor={"available"} />
            <SeatNote seatStatus={"Indisponível"} seatColor={"unavailable"} />
          </NotesContainer>

          <Form
            name={name}
            setName={setName}
            CPFValue={CPFValue}
            setCPFValue={setCPFValue}
            handleSubmit={handleSubmit}
          />

          <Footer
            movieImage={movieData.movie?.posterURL}
            movieTitle={movieData.movie?.title}
            selectedHour={`${movieData.day?.weekday} - ${movieData.name}`}
          />
        </>
      )}
    </Container>
  );
}
