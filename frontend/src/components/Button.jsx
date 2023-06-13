import styled from "styled-components";

export default function Button({ children, ...props }) {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background-color: ${(props) => (props.disabled ? '#a8a8a8a9' : props.color)};
    color: ${(props) => (props.disabled ? '#3a3a3ac6' : '#FFFFFF')};
    font-weight: bold;
    font-size: max(14px, min(2vh, 17px));
    border-radius: 5px;
    border: ${(props) => (props.disabled && props.border ? '' : props.border)};
    height: max(24px, min(5vh, 36px));
    min-height: 24px;
    max-width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};

    :hover {
        background-color: ${(props) => (props.disabled ? '' : props.hoverColor)};
    }
`