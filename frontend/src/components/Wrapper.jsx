import styled from "styled-components";

export default function Wrapper({children, ...props}) {
    return(
        <DefWrapper {...props}>
            {children}
        </DefWrapper>
    )
}

const DefWrapper = styled.div`
    width: 55vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`