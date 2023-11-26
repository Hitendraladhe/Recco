import {Component} from 'react'

import './index.css'

import Navbar from '../Navbar'

import {
  StatusContainer,
  StatusPara,
  OrderData,
  AddButtonContainer,
  AddButton,
  ProductHeading,
  ProductDetails,
  ParaHead,
  Input,
  ImgSm,
  ParaDetails,
  List,
  Btn,
  GreenBack,
  RedBack,
} from './styledComponents'

const productDetails = [
  {
    id: '1',
    imgUrl:
      'https://thumbs.dreamstime.com/b/fresh-green-apple-green-leaf-cut-half-isolated-white-background-clipping-path-fresh-green-apple-green-leaf-175907435.jpg',
    productName: 'Chicken Breast fillets Boneless ma marinated six one raw ',
    brand: 'Hormel Black Label Many',
    price: '$60.60/6+1LB',
    quantity: '0 x 6 = 1 LB',
    total: '0',
  },
  {
    id: '2',
    imgUrl:
      'https://thumbs.dreamstime.com/b/fresh-green-apple-green-leaf-cut-half-isolated-white-background-clipping-path-fresh-green-apple-green-leaf-175907435.jpg',
    productName: 'Chicken Breast fillets Boneless  marinated six one raw ',
    brand: 'Hormel Black Label Many',
    price: '$60.60/6+1LB',
    quantity: '15 x 6 = 1 LB',
    total: '$9000.88',
  },
  {
    id: '3',
    imgUrl:
      'https://thumbs.dreamstime.com/b/fresh-green-apple-green-leaf-cut-half-isolated-white-background-clipping-path-fresh-green-apple-green-leaf-175907435.jpg',
    productName: 'Chicken Breast fillets Boneless  marinated six one raw',
    brand: 'Hormel Black Label Many',
    price: '$60.60/6+1LB',
    quantity: '0 x 6 = 1 LB',
    total: '0',
  },
  {
    id: '4',
    imgUrl:
      'https://thumbs.dreamstime.com/b/fresh-green-apple-green-leaf-cut-half-isolated-white-background-clipping-path-fresh-green-apple-green-leaf-175907435.jpg',
    productName: 'Chicken Breast fillets Boneless  marinated six one raw ',
    brand: 'Hormel Black Label Many',
    price: '$60.60/6+1LB',
    quantity: '13 x 6 = 1 LB',
    total: '12654.32',
  },
]

class OrderDetails extends Component {
  state = {
    searchInput: '',
    initialProductDetails: productDetails,
    isEdit: false,
    isMissing: false,
    isCheck: false,
  }

  isChecked = () => {
    this.setState({
      isCheck: true,
    })
  }

  editDetails = () => {
    this.setState({
      isEdit: true,
    })
  }

  closeModal = (isEdit, isMissing) => {
    this.setState({
      isEdit: false,
      isMissing: false,
    })
  }

  crossMissingProduct = () => {
    this.setState({
      isMissing: true,
    })
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      isCheck,
      searchInput,
      initialProductDetails,
      isEdit,
      isMissing,
    } = this.state

    return (
      <>
        {isMissing ? (
          <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Missing Product</h5>
                </div>
                <div className="modal-body">
                  <p>{initialProductDetails.productName}..urgent?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={this.closeModal}
                  >
                    No
                  </button>
                  <button type="button" className="btn btn-primary">
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        {isEdit ? (
          <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">h</h5>
                </div>
                <div className="modal-body">
                  <p>{productDetails.productName}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={this.closeModal}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        <Navbar />
        <StatusContainer>
          <StatusPara>Supplier</StatusPara>
          <StatusPara>Shipping Date</StatusPara>
          <StatusPara>Category</StatusPara>
          <StatusPara>Total</StatusPara>
          <StatusPara>Department</StatusPara>
          <StatusPara>Status</StatusPara>
        </StatusContainer>
        <OrderData>
          <AddButtonContainer>
            <Input
              type="text"
              placeholder="  search..."
              onChange={this.onChangeInput}
              value={searchInput}
            />
            <AddButton type="button">Add</AddButton>
          </AddButtonContainer>
          <ProductDetails>
            <ProductHeading>
              <ParaHead>Product name</ParaHead>
              <ParaHead>Brand</ParaHead>
              <ParaHead>Price</ParaHead>
              <ParaHead>Quantity</ParaHead>
              <ParaHead>Total</ParaHead>
              <ParaHead>Status</ParaHead>
            </ProductHeading>
            {initialProductDetails.map(each => (
              <List key={each.id}>
                <ImgSm src={each.imgUrl} alt="img-apple" />
                <ParaDetails>{each.productName}</ParaDetails>
                <ParaDetails>{each.brand}</ParaDetails>
                <ParaDetails>{each.price}</ParaDetails>
                <ParaDetails>{each.quantity}</ParaDetails>
                <ParaDetails>{each.total}</ParaDetails>
                <ParaDetails>
                  {isCheck ? (
                    <GreenBack>Approved</GreenBack>
                  ) : (
                    <RedBack>Missing</RedBack>
                  )}
                </ParaDetails>
                <Btn type="button" onClick={this.isChecked}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check2 check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </Btn>
                <Btn type="button" onClick={this.crossMissingProduct}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg cross"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </Btn>
                <Btn type="button" onClick={this.editDetails}>
                  Edit
                </Btn>
              </List>
            ))}
          </ProductDetails>
        </OrderData>
      </>
    )
  }
}

export default OrderDetails
