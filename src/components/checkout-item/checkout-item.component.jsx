import React from 'react'
import { connect } from 'react-redux'

import './checkout-item.styles.scss'
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItemFromCart }) => {
    const { name, imageUrl, quantity, price, id } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(id)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: id => dispatch(clearItemFromCart(id)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)