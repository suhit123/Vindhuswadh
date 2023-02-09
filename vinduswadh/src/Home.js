import { useState ,useEffect} from "react";
import Cart from "./cart";
import Hotdeals from "./components/hotdeals";
import Nav from "./components/nav";
import Search from "./components/search";
import data from './data.json';
import Displayitems from "./displayitems";
import './styles/styles.css'
const Home=()=>{
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([])
    const [catogary,setCatogary]=useState('food');
    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
        console.log(cart);
    }
    const handleShow = () => {
        setShowCart(true)
      }
    useEffect(()=>{},[setCatogary,addToCart]);
    return(
        <div>
        <Nav showcart={handleShow}/>
        {showCart?<Cart cart_items={cart}/>: <div>
            <Hotdeals addToCart={addToCart} cat={catogary} data={data}/>
            <div className="container_home">
            <div className="catogary_buttons">
            <button className={catogary==="food"?"catogary_sel1":"catogary_sel"} onClick={()=>{setCatogary('food')}}>Food</button>
            <button className={catogary==="cakes"?"catogary_sel1":"catogary_sel"} onClick={()=>{setCatogary('cakes')}}>Cakes</button>
            <button className={catogary==="cooldrinks"?"catogary_sel1":"catogary_sel"} onClick={()=>{setCatogary('cooldrinks')}}>Cooldrinks</button>
            </div>
            <Search/>
            <Displayitems addTocart={addToCart} cat={catogary} data={data}/>
            </div>
        </div>}
        </div>
    );
};
export default Home;