import Template from "./components/template";
import './styles/styles.css'
const Displayitems=(props)=>{
    const data=props.data;
    return(
        <div className="all_items_container">
        {data.map((item)=>{
            if(item.catogary===props.cat){
                return(
                    <Template id={item.id}
                              name={item.name}
                              price={item.price}/>
                );
            }
        })}
        </div>
    );
};
export default Displayitems;