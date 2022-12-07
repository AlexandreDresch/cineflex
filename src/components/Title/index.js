import { Container, PageTitle } from "./styles"

export function Title({ title }) {
    return (
        <Container>
            <PageTitle>
                {title}
            </PageTitle>
        </Container>
    )
}