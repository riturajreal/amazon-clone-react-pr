import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import "swiper/css"
import "swiper/css/navigation"

const Carousel = () => {
  return (
    <div className='h-[200px] w-[800px] mx-auto m-20 scale-150'>

    <Swiper 
        loop = {true}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}

        autoplay = {{
            delay:2500
        }}
        className='h-[200px] rounded-xl'
    >

    <SwiperSlide>
        <img src={"../images/sl3.png"} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={"../images/sl6.png"} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={"../images/sl6.png"} alt="" />
    </SwiperSlide>

    

    </Swiper>
      
    </div>
  )
}

export default Carousel
