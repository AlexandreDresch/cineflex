import { FormContainer, Input, Button } from './styles';

export function Form({setName, setCPFValue, handleSubmit}) {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>
                Nome do comprador:
                <Input placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)} data-test="client-name"/>
            </label>

            <label>
                CPF do comprador:
                <Input placeholder='Digite seu CPF...' onChange={(e) => setCPFValue(e.target.value)} data-test="client-cpf"/>
            </label>

            <Button type='submit' data-test="book-seat-btn">
                Reservar assento(s)
            </Button>
        </FormContainer>
    )
}