import { useNavigate } from "react-router-dom";

import { Container } from './styles';

import Arrow from '../../assets/arrow.png';

export function ReturnButton() {
    const navigate = useNavigate();
    return (
        <Container onClick={() => navigate(-1)} data-test="go-home-header-btn">
            <img src={Arrow} alt='arrow'/>
        </Container>
    )
}