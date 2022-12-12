import { HourButton } from "./HourButton";
import { Container, Text, ButtonContainer } from "./styles";

export function Hour({weekDay, date, firstHour, secondHour, firstID, secondID }) {
    return (
        <Container data-test="movie-day" >
            <Text>
                {weekDay} - {date}
            </Text>

            <ButtonContainer>
                <HourButton hour={firstHour} IDSession={firstID}/>

                <HourButton hour={secondHour} IDSession={secondID}/>
            </ButtonContainer>
        </Container>
    )
}