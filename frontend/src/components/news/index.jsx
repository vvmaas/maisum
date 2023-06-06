import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";

export default function News() {
    return(
        <Container color="#fff"  id="news">
            <StyledWrapper>
                <Title>
                    <h1>
                        O que estamos fazendo?
                    </h1>
                    <p>
                        Saiba tudo sobre premiações, novos temas, eventos e mais...
                    </p>
                </Title>

                <Text>
                    <NewsBox>
                        <h1>
                            Notícia 1
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </NewsBox>
                    <NewsBox>
                        <h1>
                            Notícia 2
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum.
                        </p>
                    </NewsBox>
                </Text>
            </StyledWrapper>
        </Container>
    )
}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
`
const NewsBox = styled.div`
    height: fit-content;
    width: 40%;
    padding: 15px;
    background-color: #8415de2d;
    border-radius: 5px;

    h1 {
        padding-bottom: 15px;
        margin-bottom: 15px;
        font-size: 27px;
        font-weight: bold;
        width: 100%;
        border-bottom: 1px solid #000;
    }
`

const Title = styled.div`
    margin-bottom: 9vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1{
        font-size: 33px;
        font-weight: bold;
        margin-bottom: 25px;
    }

    p{
        font-size: 17px;
    }
`

const Text = styled.div`
    display: flex;
    justify-content: space-around;
`