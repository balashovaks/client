import React from 'react'
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";



const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #fff;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin-bottom: 20px;
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: ${props => props.color};
    color: white;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
`;

const CreateType = ({show, onHide}) => {
  return (
        <Modal
            show={show}
            onHide={onHide}
            centered>
            <Wrapper>
                <Title>CREATE TYPE</Title>
                <Form>
                    <Input placeholder="Enter type name"/>
                    <ContainerButton>
                        <Button color='red'>CLOSE</Button>
                        <Button color='green'>CREATE</Button>
                    </ContainerButton>
                </Form>
            </Wrapper>
        </Modal>
  );
};

export default CreateType;
