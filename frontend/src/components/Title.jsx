import styled from "styled-components";

export default function Title({children, ...props}) {
    return(
        <DefTitle {...props}>
            {children}
        </DefTitle>
    )
}

const DefTitle = styled.div`
    margin-bottom: max(13px, min(4vw, 9vh));
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${(props) => props.color ? props.color : '#000'};

    h1{
        font-size: max(24px, min(4vw, 33px));
        font-weight: bold;
        margin-bottom: max(10px, min(2vw, 25px));
        text-align: center;
    }

    p{
        font-size: max(15px, min(2vw, 17px));
        text-align: center;
    }

    @media(max-width: 600px) {
        margin-bottom: 3.5vh;
    }
`