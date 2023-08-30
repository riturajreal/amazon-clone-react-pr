import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'

import "swiper/css"
import "swiper/css/navigation"

const CarouselProduct = () => {
  return (
    <div className='bg-white m-3 p-3'>

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
                    <img className='h-[200px] bg-cover rounded-md' src={`../images/product_${i}_small.jpg`} alt="" />
                </SwiperSlide> 
        )
    }

    </Swiper>
      
    </div>
  )
}

export default CarouselProduct
