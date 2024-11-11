import styled from "styled-components"
import Navbar from "../component/Navbar"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding : "10px" })}

`

const Title = styled.h1`
 font-weight: 300;
 text-align: center;
`
 
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border :${props=> props.type === "filled" && "none"};
    background-color :${props=> props.type === "filled" ? "black" : "transparent"};
    color :${props=> props.type === "filled" && "white"};
    
`

const TopTexts = styled.div`
    ${mobile({ display : "none" })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`



const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection : "column" })}

`

const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection : "column" })}

`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
 width: 150px;
 margin-top: 20px;
`

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius : 50%;
  background-color : ${props=> props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
       flex: 1;
       display: flex;
       flex-direction: column;
       align-items: center;

`
const ProductAmountContainer = styled.div`
 display: flex;
 align-items: center;
 margin-top: 20px;

`

const ProductAmount = styled.div`
 font-size: 24px;
 margin: 5px;
 ${mobile({ margin : "5px 15px" })}

`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
  ${mobile({ marginBottom : "20px" })}

`
const Hr = styled.hr`
    background-color: #c1bfbf;
    border: none;
    height: 1px;
`

const Summary = styled.div`
 flex: 1;
 border: 0.5px solid gray;
 border-radius :10px ; 
 padding: 20px;
 height: 55vh;
`

const  SummaryTitle = styled.h1`
 font-weight: 200;
`

const  SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props=> props.type === "total" && "500"};
   font-size: ${props=> props.type === "total" && "24px"};
`

const  SummaryItemText = styled.span``

const  SummaryItemPrice = styled.span``

const  Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>

        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslFsUAoN6qupKSrq49Q0em1D0BqJtsUmZVKTu6xQroQ&s"/>
                        <Details>
                            <ProductName><b>Product:</b> Sneakers Basketball shoes</ProductName>
                            <ProductId><b>ID:</b> 123456778</ProductId>
                            <ProductColor color="orange"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src ="https://img.lovepik.com/free-png/20210919/lovepik-cotton-short-sleeved-t-shirt-png-image_400477563_wh1200.png"/>
                        <Details>
                            <ProductName><b>Product:</b>Hakura T-Shirt</ProductName>
                            <ProductId><b>ID:</b> 123456778</ProductId>
                            <ProductColor color="pink"/>
                            <ProductSize><b>Size:</b> M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORFER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
