import styled from "styled-components";

export default function Wrapper({children, ...props}) {
    return(
        <DefWrapper {...props}>
            {children}
        </DefWrapper>
    )
}

const DefWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

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