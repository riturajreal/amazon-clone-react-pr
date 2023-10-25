import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom'

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className='bg-white rounded-xl m-3 p-3'>

    <div className='text-2xl font-semibold p-3'>Best Sellers</div>

    <Swiper
        slidesPerView ={7}
        spaceBetween ={10}
        navigation ={true}
        modules = {[Navigation]}
    >

    {
        Array.from( { length:9}, (_,i) => 
                <SwiperSlide>
                <Link to={`/product/${i}`}>
                     <img className='h-[200px] bg-cover rounded-lg' src={`../images/product_${i}_small.jpg`} alt="" />
                </Link>
                    
                </SwiperSlide> 
        )
    }

    </Swiper>
      
    </div>
  )
}

export default CarouselProduct
