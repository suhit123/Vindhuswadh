const Cart=(props)=>{
const data=props.cart_items;
console.log(data);
return(
 <div>
    {data.map((item)=>{
        return(
            <p>hi</p>
        );
    })}
 </div>
);
};
export default Cart;