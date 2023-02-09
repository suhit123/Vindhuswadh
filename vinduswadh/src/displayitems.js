import Template from "./components/template";
import './styles/styles.css'
const Displayitems=({addTocart,data,cat})=>{
    const addcart=(items1)=>{
        addTocart(items1);
    }
    return(
        <div className="all_items_container">
        {data.map((item)=>{
            if(item.catogary===cat){
                return(
                    <Template
                              addcart={addcart}
                              id={item.id}
                              item={item}
                              name={item.name}
                              price={item.price}
                              image={item.image}/>
                );
            }
        })}
        </div>
    );
};
export default Displayitems;