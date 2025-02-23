import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, MailLockOutlined, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection : "column" })}

`
const Left = styled.div`
        flex : 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
     margin: 20px 0px;
`
const SocialContainer = styled.div`
     display: flex;
`
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius : 50%;
   color: white;
   background-color : #${props =>props.color} ;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   
`


const Center = styled.div`
   flex : 1;
   padding: 20px;
   ${mobile({ dispaly : "none" })}

`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`


const Right = styled.div`
   flex : 1;
   padding: 20px;
   ${mobile({ backgroundColor : "#eee" })}

`
 const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
 `
 const Payment = styled.img`
    width: 50%;
 `
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ZOHAIB.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat minima quia quis dicta doloribus corporis dolor voluptas, illo officiis magnam exercitationem, iure, hic eveniet facilis. Amet cum eum impedit?</Desc>
        <SocialContainer>
        <SocialIcon color="3B5999" >
            <FacebookIcon/>
        </SocialIcon>
        <SocialIcon color="E440fF">
            <Instagram/>
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Twitter/>
        </SocialIcon>
        <SocialIcon color="E60023">
            <Pinterest/>
        </SocialIcon>
        
        </SocialContainer>
      </Left>
      <Center>

        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>ManFashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            
            
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>877 Islamia College , peshawar Pakistan 4958 </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+92 3368865717 </ContactItem>
        <ContactItem><MailLockOutlined style={{marginRight:"10px"}}/>zohaiby@gmail.com</ContactItem>
        <Payment src ="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
