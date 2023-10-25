import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import "swiper/css"
import "swiper/css/navigation"

const Carousel = () => {
  return (
    <div className='h-[320px] z-20'>

    <Swiper 
        loop = {true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}

        autoplay = {{
            delay:2500
        }}
        className='h-[310px] rounded-xl'
    >

    <SwiperSlide>
        <img src={"../images/carousel_1.jpg"} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={"../images/carousel_2.jpg"} alt="" />
    </SwiperSlide>

    <SwiperSlide className='bg-black'>

    <video  muted="muted" className='w-[100%]'>
        <source src ={"../images/carousel_vid.mp4"} type="video/mp4" />
    </video>
    </SwiperSlide>
            
    <SwiperSlide>
        <img src={"../images/carousel_4.jpg"} alt="" />
    </SwiperSlide>

    <SwiperSlide>
        <img src={"../images/carousel_5.jpg"} alt="" />
    </SwiperSlide>


    </Swiper>
      
    </div>
  )
}

export default Carousel
