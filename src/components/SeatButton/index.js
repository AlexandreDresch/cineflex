import {
    Container,
    ContainerDisabled,
    Text,
} from './styles';

export function SeatButton({seatNumber, isAvailable, selectSeat, isSelected}) {
    return (
        <>
        {
            isAvailable ?
            <Container color={isSelected} onClick={selectSeat} data-test="seat">
            <Text>
                {seatNumber}
            </Text>
            </Container>
            :
            <ContainerDisabled onClick={() => alert("Esse assento não está disponível")} data-test="seat">
            <Text>
                {seatNumber}
            </Text>
            </ContainerDisabled>
        }
        </>
    )
}