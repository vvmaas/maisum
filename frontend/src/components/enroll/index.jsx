import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Title from "../Title";
import EnrollForm from "./EnrollForm";

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
                            Inscreva seu e-mail e receba todas as novidades do aplicativo
                        </p>
                    </StyledTitle>
                    <EnrollForm />
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`