import {
    Container,
    ImageContainer,
    Image,
    TextContainer,
    Text,
} from './styles';

export function Footer({movieImage, movieTitle, selectedHour}) {
    return (
        <Container>
            <ImageContainer>
                <Image src={movieImage}/>
            </ImageContainer>

            <TextContainer>
                <Text>
                    {movieTitle}
                </Text>
                {
                    selectedHour &&
                    <Text>
                        {selectedHour}
                    </Text>
                }
            </TextContainer>
            
        </Container>
    )
}