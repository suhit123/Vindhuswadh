import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hotdealtemplate from './hotdealtemplate';
const Hotdeals= (props)=>{
 const data=props.data;
 return( 
    <div className="hot_deals_container">
        <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false} showIndicators={false} interval={1000}>
            {data.map((item)=>{
                return(
                <Hotdealtemplate 
                image={item.image}
                id={item.id}
                name={item.name}
                price={item.price}/>);
            })}
         </Carousel>
        {/* // <AliceCarousel mouseTracking items={items}  responsive={responsive}
        // controlsStrategy="alternate"/> */}
    </div>
 );
};
export default Hotdeals;