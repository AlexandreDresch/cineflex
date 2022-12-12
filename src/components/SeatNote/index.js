import {
    Container,
    SeatButton,
    Text,
} from './styles';

export function SeatNote({seatStatus, seatColor}) {
    return (
        <Container>
            <SeatButton color={seatColor} />
            <Text>
                {seatStatus}
            </Text>
        </Container>
    )
}