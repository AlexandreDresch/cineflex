import { Container, Text } from './styles';

export function HourButton({hour}) {
    return (
        <Container>
            <Text>
                {hour}
            </Text>            
        </Container>
    )
}