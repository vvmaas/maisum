import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-scroll"
import { AiOutlineMenu } from "react-icons/ai"
import logo_maisum_white from "../../assets/images/logo/logo_maisum_white.png"
import DropdownMenu from "./DropdownMenu";


export default function TopBar() {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
     }, [menu]);
    return (
        <Container>
            <Wrapper>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                    <Logo>
                        <img src={logo_maisum_white} alt="+1" />
                    </Logo>
                </Link>
                <Sections>
                    <Section>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                            Início
                        </Link>
                    </Section>

                    <Section>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                            Sobre
                        </Link>
                    </Section>

                    <Section>
                        <Link to="news" spy={true} smooth={true} offset={-80} duration={500}>
                            Novidades
                        </Link>
                    </Section>

                    <Section>
                        <Link to="enroll" spy={true} smooth={true} offset={0} duration={500}>
                            Inscreva-se
                        </Link>
                    </Section>
                    <Download>
                        <Link to="download" spy={true} smooth={true} offset={0} duration={500}>
                            <Section>
                                Download
                            </Section>
                        </Link>
                    </Download>
                </Sections>
                <DropdownButton onClick={() => setMenu(!menu)}>
                    <AiOutlineMenu />
                </DropdownButton>
                <DropdownMenu active={menu} setMenu={setMenu}/>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 7;
    width: 100vw;
    height: 80px;
    background-color: #8415deb1;
    backdrop-filter: blur(2px);
    //border-bottom: 1px solid #fca625;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    @media(max-width:1800px) {
        padding-left: 128px;
        padding-right: 128px;
    }

    @media(max-width:1200px) {
        padding-left: 96px;
        padding-right: 96px;
    }

    @media(max-width:900px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media(max-width:600px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`

export const DropdownButton = styled.div`
    display: none;
    
    @media(max-width: 900px) {
        font-size: 35px;
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #fafafa;
    
        :hover {
            color: #fff;
            filter: brightness(2);
        }
    }
`

const Sections = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 900px) {
        display: none;
    }
`

const Section = styled.p`
    font-size: max(15px, min(2vw, 20px));
    margin: 0 10px;
    cursor: pointer;
    color: #fafafa;
    
    :hover {
        color: #fff;
        text-shadow: rgba(255, 255, 255, 0.5) 0 0 4px;
        filter: brightness(2);
    }
`

export const Logo = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    cursor: pointer;

    img {
        width: 50px;
    }
`

const Download = styled.div`
    width: fit-content;
    margin-left: 5px;
    padding: 5px 0;
    border-radius: 5px;
    background-color: #ffffff3e;
    cursor: pointer;
    :hover {
        background-color: #ffffff5a;
        filter: brightness(1.4);
        p {
            color: #fff;
            text-shadow: rgba(255, 255, 255, 0.5) 0 0 4px;
            filter: brightness(2);
        }
    }
`