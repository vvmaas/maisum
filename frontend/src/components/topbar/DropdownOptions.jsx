import styled from "styled-components";
import Wrapper from "../Wrapper";
import { Link } from "react-scroll"
import { AiOutlineMenu } from "react-icons/ai"
import logo_maisum_white from "../../assets/images/logo/logo_maisum_white.png"
import { DropdownButton, Logo } from ".";

export default function DropdownOptions({...props}) {
    function setMenuFalse() {
        props.setMenu(false)
    }
    return(
        <Container {...props}>
            <StyledWrapper>
                <TopBar>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuFalse()}>
                        <Logo>
                            <img src={logo_maisum_white} alt="+1" />
                        </Logo>
                    </Link>
                    <DropdownButton onClick={() => setMenuFalse()}>
                        <AiOutlineMenu />
                    </DropdownButton>
                </TopBar>
                <Section>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuFalse()}>
                        <p>Início</p> 
                    </Link>
                </Section>
                <Section>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuFalse()}>
                        <p>Sobre</p>   
                    </Link>
                </Section>
                <Section>
                    <Link to="news" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMenuFalse()}>
                        <p>Novidades</p>     
                    </Link>
                </Section>
                <Section>
                    <Link to="enroll" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuFalse()}>
                        <p>Inscreva-se</p>         
                    </Link>
                </Section>
                <Section>
                    <Link to="download" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuFalse()}>
                        <p>Download</p>   
                    </Link>
                </Section>
            </StyledWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    z-index: 6;
    margin-left: ${(props) => props.active ? '0' : '100vw' };
    height: fit-content;
    width: 100vw;
    background-color: #fafafa;
    padding-bottom: 15px;
    box-shadow: ${(props) => props.active ? '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);' : '0' };

    @media(min-width:900px) {
        display: none;
    }
`

const StyledWrapper = styled(Wrapper)`
    min-height: inherit;
    flex-direction: column;

    @media(max-height: 500px) {
        padding-top: 0;
        padding-bottom: 0;
    }
`

const TopBar = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #101010;
    margin-bottom: 15px;

    @media(max-width:900px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media(max-width:600px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

const Section = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 60px;
    max-height: 70px;
    display: flex;
    align-items: center;
    font-size: max(15px, min(5vw, 18px));

    p{
        cursor: pointer
    }
`