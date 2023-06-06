import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Title from "../Title";

export default function About() {
    return (
        <Container color="#000" id="about">
            <StyledWrapper>
                <Title color="#fff">
                    <h1>
                        O que é o +1?
                    </h1>
                </Title>

                <Content>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                        It has survived not only five centuries, but also the leap into electronic typesetting, <br/>
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets <br/> 
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </Content>
            </StyledWrapper>
        </Container>
    )
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
`

const Content = styled.div`
    color: #fff;
    font-size: 20px;
`