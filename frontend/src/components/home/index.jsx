import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import logo_maisum_white from "../../assets/images/logo/logo_maisum_white.png"

export default function Home(){
    return(
        <Container color="#8415deb1">
            <Wrapper>
                <Logo>
                    <img src={logo_maisum_white} alt="+1" />
                </Logo>
                <Slogan>and much more!</Slogan>
            </Wrapper>
        </Container>
    )
}

const Logo = styled.div`
    margin-right: 3vw;
    img {
        width: 350px;
    }

`

const Slogan = styled.h1`
    font-size: 25px;
    color: #fff;
    cursor: default;

    :hover {
        text-shadow: rgba(255, 255, 255, 0.5) 0 0 4px;
        filter: brightness(2);
    }
`