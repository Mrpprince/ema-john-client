import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart);
    //const total = cart.reduce( (total, prd) => total + prd.price , 0 )
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div  style={{padding:"70px",border:"1px solid lightgray",margin:"10px"}}>
            <h4>Order Summary</h4>
            <p style={{fontWeight:"700"}}>Items Ordered: {cart.length}</p>
            <p style={{fontWeight:"700"}}>Product Price: {formatNumber(total)}</p>
            <p style={{fontWeight:"700"}}><small>Shiiping Cost: {shipping}</small></p>
            <p style={{fontWeight:"700"}}><small>Tax + VAT: {tax}</small></p>
            <p style={{fontWeight:"700"}}>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;