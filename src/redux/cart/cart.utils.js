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

export const clearItemFromCart = (cartItems, cartId) => cartItems.filter((cartItem => cartItem.id !== cartId))

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map( cartItem => 
        cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
}

