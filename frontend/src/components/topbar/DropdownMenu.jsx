import styled from "styled-components";
import DropdownOptions from "./DropdownOptions";

export default function DropdownMenu({...props}) {
    return(
        <Container {...props}>
            <DropdownOptions active={props.active} setMenu={props.setMenu}/>
            <Outside onClick={() => props.setMenu(false)} active={props.active}></Outside>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    z-index: ${(props) => props.active ? 1 : -1};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.active ? "#0000008b" : "#0000000"};

    @media(min-width:900px) {
        display: none;
    }
`

const Outside = styled.div`
    height: 100%;
    width: 100vw;
`