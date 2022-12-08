import { HourButton } from "./HourButton";
import { Container, Text, ButtonContainer } from "./styles";

export function Hour({weekDay, date, firstHour, secondHour }) {
    return (
        <Container>
            <Text>
                {weekDay} - {date}
            </Text>

            <ButtonContainer>
                <HourButton hour={firstHour}/>

                <HourButton hour={secondHour}/>
            </ButtonContainer>
        </Container>
    )
}