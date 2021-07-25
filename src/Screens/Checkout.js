import React, { useState, useEffect } from "react";
import style from "../css/checkout.module.css";
import StripeCheckout from "react-stripe-checkout";

function Checkout(props) {
  const checkoutKey =
    "pk_test_51JH4OmSABth3s2yy5RcMlEPB8AAQfOZYTRrSsZyjV1azvyeFcxB8mnedjr8JNYzCkGBrBQKt1UK9GzG2u4AlGKKd00MOrtGOxH";

  const handleToken = (token) => {
    //this is done when our payment is successful
    console.log(token);
  };

  const { partid } = props.location?.state;
  const { price, title } = partid;

  return (
    <div className={style.checkout}>
      <StripeCheckout
        stripeKey={checkoutKey}
        name={title}
        amount={price * 100} //price is divided by 100 so we multiply by 100
        currency="INR"
        billingAddress //gets auto filled
        shippingAddress //gets auto filled
        token={handleToken}
      />
    </div>
  );
}

export default Checkout;
// npm i react-stripe-checkout for checkout
