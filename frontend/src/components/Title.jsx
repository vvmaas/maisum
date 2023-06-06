import styled from "styled-components";

export default function Title({children, ...props}) {
    return(
        <DefTitle {...props}>
            {children}
        </DefTitle>
    )
}

const DefTitle = styled.div`
    margin-bottom: 9vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${(props) => props.color ? props.color : '#000'};

    h1{
        font-size: 33px;
        font-weight: bold;
        margin-bottom: 25px;
    }

    p{
        font-size: 17px;
        text-align: center;
    }
`