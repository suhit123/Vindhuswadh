import { useState ,useEffect} from "react";
import Hotdeals from "./components/hotdeals";
import data from './data.json';
import Displayitems from "./displayitems";
import './styles/styles.css'
const Home=()=>{
    
    const [cart, setCart] = useState([])
    const [catogary,setCatogary]=useState('food');
    useEffect(()=>{},[setCatogary]);
    return(
        <div >
            <Hotdeals cat={catogary} data={data}/>
            <div className="container_home">
            <div className="catogary_buttons">
            <button className={catogary==="food"?"catogary_sel1":"catogary_sel"} onClick={()=>{setCatogary('food')}}>Food</button>
            <button className={catogary==="cakes"?"catogary_sel1":"catogary_sel"} onClick={()=>{setCatogary('cakes')}}>Cakes</button>
            <button className={catogary==="cooldrinks"?"catogary_sel1":"catogary_sel"} onClick={()=>{setCatogary('cooldrinks')}}>Cooldrinks</button>
            </div>
            <Displayitems cat={catogary} data={data}/>
            </div>
        </div>
    );
};
export default Home;