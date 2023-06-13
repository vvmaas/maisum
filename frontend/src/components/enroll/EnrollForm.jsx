import { useState } from "react";

import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";

export default function EnrollForm(){
    const [email, setEmail] = useState('');
    const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

    function submit(e){
        e.preventDefault();
        
        setEmail('');
    }

    return(
        <Container>
            <form onSubmit={submit}>
                <Input type='email' value={email} placeholder='E-mail' onChange={(e) => (setEmail(e.target.value))} />
                <Button type='submit' disabled={ email.length===0 || !email.match(validEmail)} color='#8415deb1' hoverColor='#8415dedc'>Inscrever</Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 85%;
    height: fit-content;
    margin-top: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form, input, button {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    button {
        margin-top: 15px;
    }
`