import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color: #fedcc6;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
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
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sunday Rituals</Logo>
        <Desc>
          Born out of a love for indulging in the more leisurely traditions of
          the weekend, our beauty products are all locally made in Vancouver, BC
          with ethically-sourced, all natural ingredients. We ensure all
          products are free of palm oil and artificial colours and fragrances.
        </Desc>
        <SocialContainer>
          <SocialIcon style={{ color: "black" }}>
            <Facebook />
          </SocialIcon>
          <SocialIcon style={{ color: "black" }}>
            <Instagram />
          </SocialIcon>
          <SocialIcon style={{ color: "black" }}>
            <Twitter />
          </SocialIcon>
          <SocialIcon style={{ color: "black" }}>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center style={{ marginLeft: "3rem" }}>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Soaps</ListItem>
          <ListItem>Swag</ListItem>
          <ListItem>Lotions</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginLeft: "0px" }} /> Vancouver, BC, Canada
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginLeft: "4px" }} /> +1 604 564 7865
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginLeft: "5px" }} /> hello@sundayrituals.ca
        </ContactItem>
        <Payment
          style={{ marginLeft: "0px" }}
          src="https://i0.wp.com/hollywoodsupernatural.com/wp-content/uploads/2018/01/secure-stripe-payment-logo.png?ssl=1"
        />
      </Right>
    </Container>
  );
};

export default Footer;
