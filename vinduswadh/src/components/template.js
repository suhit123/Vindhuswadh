import '../styles/styles.css'
const Template =(props)=>{
    return(
        <div className="template_container">
            <div className="img_container">
                <img src={"https://vismaifood.com/storage/app/uploads/public/c5d/83b/985/thumb__700_0_0_0_auto.jpg"} alt=""/>
            </div>
            <div className="details_content">
                <div><h1 className="item_name">{props.name}</h1>
                <h3 className="price"> ₹{props.price}</h3>
                </div>
                <div>
                    <button className='add'>+</button>
                </div>
            </div>
        </div>
    );
};
export default Template;