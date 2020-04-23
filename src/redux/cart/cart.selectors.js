import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCarItems = createSelector(
    [selectCart],
    cart => cart.cartItems 
)

export const selectCartItemsCount = createSelector(
    [selectCarItems],
    cartItems => cartItems.reduce((accumulatiedQuantity, { quantity }) => accumulatiedQuantity + quantity, 0)
)