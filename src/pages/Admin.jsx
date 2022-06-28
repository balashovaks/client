import React from 'react'
import styled from 'styled-components';
import ImageUploding from 'react-images-uploading'
import Dropzone from "react-dropzone";
import { useState } from 'react';
import axios from 'axios';



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EDE7F6;
`;

const Wrapper = styled.div`
    width: 60%;
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
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;
    margin: 10px 10px 0px 0px;
    background-color: ${props => props.color};
    color: white;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
`;
const ImageContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;
const DropArea = styled.div`
  width: 50vw;
  height: 50vh;
  border: 5px dashed black;
  text-align: center;
`;


const Admin = () => {
  const [drag, setDrag] = useState(false)

  function dragStartHendler(e) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHendler(e) {
    e.preventDefault()
    setDrag(false)
  }

  function onDropHendler(e) {
    e.preventDefault()
    let files = [...e.dataTransfer.files]
    const formData = new FormData()
    formData.append('file', files[0])
    axios.post('url', formData,)

    setDrag(false)
  }



  return (
    <Container>
        <Wrapper>
            <Title>CREATE ITEM</Title>
            <Form>
                <Input placeholder="Type"/>
                <Input placeholder="Product Name"/>
                <Input placeholder="Size"/>
                <Input placeholder="Price"/>
                <Input placeholder="Color"/>
                <Input placeholder="Descriptions"/>
            </Form>
            <ImageContainer>
                  {drag
                  ?
                  <DropArea
                    onDragStart={e => dragStartHendler(e)}
                    onDragLeave={e => dragLeaveHendler(e)}
                    onDragOver={e => dragStartHendler(e)}
                    onDrop={e => onDropHendler(e)}
                  >upload image</DropArea>
                  :
                  <div
                    onDragStart={e => dragStartHendler(e)}
                    onDragLeave={e => dragLeaveHendler(e)}
                    onDragOver={e => dragStartHendler(e)}
                  >drag the image to the selected area</div>}

                </ImageContainer>
                <ContainerButton>
                    <Button color='red' >CLOSE</Button>
                    <Button color='green' >CREATE</Button>
                </ContainerButton>
        </Wrapper>
    </Container>
);
}

export default Admin
