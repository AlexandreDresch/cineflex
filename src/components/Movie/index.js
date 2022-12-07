import { Container, Image } from './styles.js';

export function Movie({image}) {
    return (
        <Container>
            <Image src={image}/>
        </Container>
    )
}