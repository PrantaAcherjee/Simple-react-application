import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    // console.log(cart); 
    //const totalReducer=(previous,product)=>previous+product.price;
    //const total=cart.reduce(totalReducer,0);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summary</h3>
            <h5>Item ordered :{props.cart.length}</h5>
            <br />
            <h5>total: {total}</h5>
            <h5>Shiping: {shipping}</h5>
            <h5>tax:{tax}</h5>
            <h5>Grand total:{grandTotal}</h5>
        </div>
    );
};

export default Cart;