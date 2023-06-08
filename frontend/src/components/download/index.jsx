import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Title from "../Title";
import appstore_en from "../../assets/images/appstore_en.svg"
import playstore_en from "../../assets/images/playstore_en.svg"

export default function Download() {
    return (
        <Container color="#fff" id="download">
            <StyledWrapper>
                <Content>
                    <StyledTitle color="#000000">
                        <h1>
                            Baixe agora
                        </h1>
                        <p>
                            Faça o download e comece a jogar hoje!
                        </p>
                    </StyledTitle>
                    <StoreButtons>
                        <a href="https://play.google.com/store/games?hl=pt-br" target="_blank">
                            <img src={playstore_en} alt="Download at playstore" />
                        </a>
                        <a href="https://www.apple.com/br/app-store/" target="_blank">
                            <img src={appstore_en} alt="Download at appstore" />
                        </a>
                    </StoreButtons>
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
    margin-bottom: 4vh;
`

const Content = styled.div`
    background-color: #8415de2d;
    padding: 40px;
    border-radius: 5px;
`

const StoreButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img{
        width: 100%;
        min-width: 90px;
        object-fit: contain;
    }
    a{
        width: 50%;
        max-width: 200px;
        margin: 0 10px;
        cursor: pointer;
    }
`