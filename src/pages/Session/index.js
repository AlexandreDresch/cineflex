import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hour } from "../../components/Hour";
import { Title } from "../../components/Title";

import { api } from "../../services/api";

import { Container } from "./styles";

export function Session() {
  const [movieData, setMovieData] = useState([]);
  const [days, setDays] = useState([]);

  const { idFilme } = useParams();

  useEffect(() => {
    api
      .get(`/movies/${idFilme}/showtimes`)
      .then((response) => {
        setMovieData(response.data);
        setDays(response.data.days);
      })
      .catch((err) => {
        console.error("ERROR: " + err);
      });
  }, [idFilme]);

  return (
    <Container>
      <Header />

      <Title title="Selecione o horário" />

      {days.map((item) => (
        <Hour
          key={item.id}
          weekDay={item.weekday}
          date={item.date}
          firstHour={item.showtimes[0].name}
          secondHour={item.showtimes[1].name}
        />
      ))}

      <Footer movieImage={movieData.posterURL} movieTitle={movieData.title} />
    </Container>
  );
}
