import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg"

const onToken = token => {
    console.log(token)
    alert('Payment successfull')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_N2A4wtKVKSuCslGe5DrNWtLS00Ifw9sF0L"

    return (
        <StripeCheckout 
            label="Pay Now"
            name='CRWN Clothing'
            billingAndress
            shippingAddress
            image="https://www.svgrepo.com/show/46494/shopping-bags.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton