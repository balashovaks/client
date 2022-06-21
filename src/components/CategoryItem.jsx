import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 50vh;
    position: relative;
    transition: all 0.3s ease;

    &:hover{
    transform: scale(1.1);
  }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "20vh"})}
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: #ffffff;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #eeecec;
    color: grey;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
    background-color: #E1BEE7;
    transform: scale(1.1);
  }
`;

const Categoryitem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
};

export default Categoryitem;
