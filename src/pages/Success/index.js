import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";

import {
  Container,
  SuccessContainer,
  SuccessTitle,
  MovieContainer,
  Title,
  Text,
  Button,
} from "./styles";

export function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieTitle, date, time, selectedSeats, name, CPFValue } =
    location.state;

  function CPFFormat(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return (
    <Container>
      <Header />

      <SuccessContainer>
        <SuccessTitle>Pedido feito</SuccessTitle>
        <SuccessTitle>com sucesso!</SuccessTitle>
      </SuccessContainer>

      <MovieContainer data-test="movie-info">
        <Title>Filme e sessão</Title>
        <Text>{movieTitle}</Text>
        <Text>{`${date} - ${time}`}</Text>
      </MovieContainer>

      <MovieContainer data-test="seats-info">
        <Title>Ingressos</Title>

        {selectedSeats.map((item) => (
          <Text key={item}>Assento {item}</Text>
        ))}
      </MovieContainer>

      <MovieContainer data-test="client-info">
        <Title>Comprador</Title>

        <Text>Nome: {name}</Text>
        <Text>CPF: {CPFFormat(CPFValue)}</Text>
      </MovieContainer>

      <Button
        type="submit"
        onClick={() => navigate("/")}
        data-test="go-home-btn"
      >
        Voltar pra Home
      </Button>
    </Container>
  );
}
