import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const Checkout = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <span className="total">TOTAL: ${cartTotal}</span>
        <StripeCheckoutButton price={cartTotal} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)

