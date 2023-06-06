import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Title from "../Title";

export default function Enroll() {
    return (
        <Container color="#8415deb1" id="enroll">
            <StyledWrapper>
                <Content>
                    <StyledTitle>
                        <h1>
                            Assine nossa newsletter!
                        </h1>
                        <p>
                            Se inscreva e fique por dentro de todas as novidades do aplicativo
                        </p>
                    </StyledTitle>
                </Content>
            </StyledWrapper>
        </Container>
    )
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
`

const StyledTitle = styled(Title)`
    align-items: center;
    margin-bottom: 0;
`

const Content = styled.div`
    background-color: #ffffffc3;
    padding: 40px;
    border-radius: 5px;
`