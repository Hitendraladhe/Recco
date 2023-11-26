import {Component} from 'react'

import {
  Container,
  List,
  Heading,
  Button,
  Select,
  OrderContainer,
  HeadingH,
  BtnContainer,
  Span,
  BtnGreen,
  BtnTransparent,
} from './styledComponents'

class Navbar extends Component {
  state = {
    count: 3,
  }

  render() {
    const {count} = this.state

    return (
      <>
        <Container>
          <Heading>Reeco</Heading>

          <List>Store</List>
          <List>Orders</List>
          <List>Analytics</List>

          <Button type="button" className="cart-btn">
            <Span>{count}</Span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="bi bi-cart "
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Button>
          <Select className="select">
            <option value="Hello, Jones">Hello, Jones</option>
            <option value="Hello, David">Hello, David</option>
          </Select>
        </Container>
        <OrderContainer>
          <HeadingH>
            orders > <Span>order32457ABC</Span>
          </HeadingH>
          <BtnContainer>
            <h2>order32457ABC</h2>
            <BtnTransparent>Back</BtnTransparent>
            <BtnGreen>Approve Button</BtnGreen>
          </BtnContainer>
        </OrderContainer>
      </>
    )
  }
}

export default Navbar
