import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Title from "../Title";
import appstore_en from "../../assets/images/appstore_en.svg"
import playstore_en from "../../assets/images/playstore_en.svg"

export default function Download() {
    return (
        <Container color="#fff">
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
                        <img src={playstore_en} alt="Download at playstore" />
                        <img src={appstore_en} alt="Download at appstore" />
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
    width: 60%;
    background-color: #8415de2d;
    padding: 40px;
    border-radius: 5px;
`

const StoreButtons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    img{
        width: 50%;
        max-width: 200px;
        margin: 0 10px;
        object-fit: contain;
        cursor: pointer;
    }
`