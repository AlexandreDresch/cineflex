import { FormContainer, Input, Button } from './styles';

export function Form({name, setName, CPFValue, setCPFValue, handleSubmit}) {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>
                Nome do comprador:
                <Input placeholder='Digite seu nome...' value={name} onChange={(e) => setName(e.target.value)} data-test="client-name" required/>
            </label>

            <label>
                CPF do comprador:
                <Input placeholder='Digite seu CPF...' value={CPFValue} onChange={(e) => setCPFValue(e.target.value)} data-test="client-cpf" type="number" maxLength={11} minLength={11} required/>
            </label>

            <Button type='submit' data-test="book-seat-btn">
                Reservar assento(s)
            </Button>
        </FormContainer>
    )
}