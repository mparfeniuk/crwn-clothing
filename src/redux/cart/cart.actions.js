import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = id => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: id
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const increaseQuantity = item => {
    return ({
        type: CartActionTypes.INCREASE_QUANTITY,
        payload: item
    })

}

export const decreaseQuantity = item => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item
})