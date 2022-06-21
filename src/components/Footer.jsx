import { Facebook, Instagram, LocationOn, Mail, PhoneIphone, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    &:hover{
        opacity: 0.5;
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover{
    color: #4A148C;
    font-weight: 500;
}
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#f8efef"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>ETERNITY</Logo>
              <Description>2022 ETERNITY All rights reserved</Description>
              <SocialContainer>
                  <SocialIcon color="#3b5998">
                      <Facebook />
                  </SocialIcon>
                  <SocialIcon color="#C13584">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="#00acee">
                      <Twitter />
                  </SocialIcon>
                  <SocialIcon color="#c8232c">
                      <Pinterest />
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contacts</Title>
              <ContactItem>
                  <LocationOn style={{marginRight:"10px"}}/>
                  535 N Main St, Los Angeles, CA 90012</ContactItem>
              <ContactItem>
                  <PhoneIphone style={{marginRight:"10px"}}/>
                  +1 213-629-3101</ContactItem>
              <ContactItem>
                  <Mail style={{marginRight:"10px"}}/>
                  contact@eternity.com</ContactItem>
          </Right>
      </Container>
  )
};

export default Footer;
