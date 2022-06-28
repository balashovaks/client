import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EDE7F6;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
    ${mobile({width: "80%"})}
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    text-align: start;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    margin: 10px 17px;
    padding: 15px 20px;
    background-color: #4527A0;
    color: white;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>By creating an account, you consent to the processing of personal data</Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
};

export default Register;
