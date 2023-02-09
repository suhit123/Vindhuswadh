import '../styles/styles.css'
const Hotdealtemplate =(props)=>{
    return(
        <div className="hot_template_container">
            <div className="hot_img_container">
                <img src={"https://vismaifood.com/storage/app/uploads/public/c5d/83b/985/thumb__700_0_0_0_auto.jpg"} alt=""/>
            </div>
            <div className="hot_details_content">
                <div><h1 className="hot_item_name">{props.name}</h1>
                <h3 className="hot_price"> ₹{props.price}</h3>
                </div>
                <div>
                    <button className='hot_add'>+</button>
                </div>
            </div>
        </div>
    );
};
export default Hotdealtemplate;