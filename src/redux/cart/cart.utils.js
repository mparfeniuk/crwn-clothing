export const addItemToCart = (cartItems, cartItemToAd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => {
            if(cartItem.id === cartItemToAd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1 }
            } else {
                return cartItem
            } 
        })
    }

    return [...cartItems, {...cartItemToAd, quantity: 1}]
}