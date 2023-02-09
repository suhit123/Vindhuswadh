import Addtocarttemplate from "./components/addtocarttemplate";

const Cart=(props)=>{
const data=props.cart_items;
console.log(data);
return(
 <div>
    {data.map((item)=>{
        return(
            <Addtocarttemplate item={item}/>
        );
    })}
 </div>
);
};
export default Cart;