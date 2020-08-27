import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    //const totalPrice= cart.reduce((total,prd)=>total + prd.price,0)

    //const total=cart.reduce((total,prd)=>total + prd.price,0)
     let total=0;
    for(let i=0;i<cart.length;i++){

        const course =cart[i];
        total=total+ course.price;
    }

   

        //tax code

        //const tax =Math.round(total/10);
        
      //  const grandTotal=(total +shipping+Number(tax)).toFixed(2);

        //format 2 decimal

        const formatNumber = num =>{
            const precision =num.toFixed(2);
            return Number(precision);

        }


    return (
        <div>
            <h4>Order Summary</h4>
    <p>Courses Ordered:{cart.length}</p> 
    <p>Total price:{formatNumber(total)}</p>
    <p>Confirm Your Order</p>
    <p >Review your Courses</p>    
        </div>
    );
};
export default Cart;