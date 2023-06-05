import styled from "styled-components";

export default function DefContainer({children, ...props}) {
    return(
        <Container {...props}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    background-color: ${(props) => (props.color)};
    display: flex;
    justify-content: center;
    align-items: center;
`