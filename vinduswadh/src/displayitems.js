import Template from "./components/template";
import './styles/styles.css'
const Displayitems=(props)=>{
    const data=props.data;
    const addtocart=(data)=>{
        props.addTocart(data);
    }
    return(
        <div className="all_items_container">
        {data.map((item)=>{
            if(item.catogary===props.cat){
                props.addTocart(item);
                return(
                    <Template
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