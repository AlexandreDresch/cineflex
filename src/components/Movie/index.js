import { Link } from 'react-router-dom';
import { Container, Image } from './styles.js';

export function Movie({image, movieID}) {
    return (
        <Container data-test="movie">
            <Link to={`/sessoes/${movieID}`}>
                <Image src={image}/>
            </Link>
        </Container>
    )
}