
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./Slide-image.css";

// import required modules
import { EffectCreative } from "swiper";


function SlideImage(props) {
     return (
          <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        > 
        {props.images.map((item,index)=>{
          return(
            <SwiperSlide key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          )
        })}
        </Swiper>
          )
}

export default SlideImage