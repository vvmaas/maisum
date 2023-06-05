import styled from "styled-components";
import logo_maisum_white from "../../assets/images/logo/logo_maisum_white.png"

export default function TopBar() {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img src={logo_maisum_white} alt="+1" />
                </Logo>
                <Sections>
                    <Section>
                        Início
                    </Section>

                    <Section>
                        Sobre
                    </Section>

                    <Section>
                        Novidades
                    </Section>

                    <Section>
                        Inscrever-se
                    </Section>
                    <Download>
                        <Section>
                            Download
                        </Section>
                    </Download>
                </Sections>
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
    z-index: 1;
    width: 100vw;
    height: 80px;
    background-color: #8415deb1;
    backdrop-filter: blur(2px);
    //border-bottom: 1px solid #fca625;
`

const Wrapper = styled.div`
    width: 55vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

const Sections = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;

`

const Section = styled.p`
    font-size: 20px;
    margin: 0 10px;
    cursor: pointer;
    color: #fafafa;
    
    :hover {
        color: #fff;
        text-shadow: rgba(255, 255, 255, 0.5) 0 0 4px;
        filter: brightness(2);
    }
`

const Logo = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;

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