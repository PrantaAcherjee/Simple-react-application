import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    };
    const shipping = 15;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summary</h3>
            <h5>Item ordered :{props.cart.length}</h5>
            <br />
            <p>total: {total}</p>
            <h5>Shiping: {shipping}</h5>
            <h5>tax:{tax}</h5>
            <h5>Grand total:{grandTotal}</h5>
        </div>
    );
};

export default Cart;