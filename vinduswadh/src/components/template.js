import '../styles/styles.css'
const Template =({image,name,price,addcart,item})=>{
    return(
        <div className="template_container">
            <div className="img_container">
                <img src={image} alt=""/>
            </div>
            <div className="details_content">
                <div><h1 className="item_name">{name}</h1>
                <h3 className="price"> ₹{price}</h3>
                </div>
                <div>
                    <button className='add'  onClick={() => addcart(item)}>+</button>
                </div>
            </div>
        </div>
    );
};
export default Template;