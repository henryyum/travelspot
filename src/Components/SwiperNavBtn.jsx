import React from 'react'
import {useSwiper} from 'swiper/react'

export default function SwiperNavBtn(){
  const swiper = useSwiper()

  return(
    <div className="testimony-btn-wrapper-about">

          <button 
          onClick={()=> swiper.slidePrev()}

          className="slider-icon-btn btn-opacity">
            <img
              className="slider-icon"
              src="images/arrowback.png"
              alt=""
            ></img>
          </button>


          <button 
          onClick={()=> swiper.slideNext()}
          className="slider-icon-btn">
            <img
              className="slider-icon"
              src="images/arrowforward.png"
              alt=""
            ></img>
          </button>


        </div>
  )
}




