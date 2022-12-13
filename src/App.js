import styled from "styled-components";

import Routes from "./routes/routes";

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
