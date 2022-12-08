import { Container, MoviesContainer } from "./styles.js";

import { Header } from "../../components/Header";
import { Title } from "../../components/Title/index.js";

import { api } from "../../services/api.js";
import { useEffect, useState } from "react";
import { Movie } from "../../components/Movie/index.js";

export function Home() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        api
          .get("/movies")
          .then((response) => setMovies(response.data))
          .catch((err) => {
            console.error("ERROR: " + err);
          });
      }, []);

  return (
    <Container>
      <Header />
      <Title title="Selecione o filme" />

      <MoviesContainer>
        {
            movies.map((item) => (
                <Movie key={item.id} image={item.posterURL} movieID={item.id}/>
            ))
        }
      </MoviesContainer>
    </Container>
  );
}
