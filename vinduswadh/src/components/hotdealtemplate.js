import '../styles/styles.css'
const Hotdealtemplate =(props)=>{
    return(
        <div className="hot_template_container">
            <div className="hot_img_container">
                <img src={props.image} alt=""/>
            </div>
            <div className="hot_details_content">
                <div className='content_details'>
                <h1 className='itemoftheday'>ITEM OF THE DAY</h1>
                <h1 className="hot_item_name">{props.name}</h1>
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