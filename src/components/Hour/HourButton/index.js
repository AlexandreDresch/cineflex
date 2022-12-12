import { Link } from "react-router-dom";
import { Container, Text } from "./styles";

export function HourButton({ hour, IDSession }) {
  return (
    <Link to={`/assentos/${IDSession}`}>
      <Container data-test="showtime">
        <Text>{hour}</Text>
      </Container>
    </Link>
  );
}
