import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './noti.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Noti() {
  return (
    <>
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
    <SwiperSlide>
  <div className="wap_thongtin flex justify-center items-center ">
    <span className="font-bold text-yellow-300">Coupon 10% khi bạn đăng ký là thành viên của CKD</span>
  </div>
</SwiperSlide>

      <SwiperSlide>
      <div className="wap_thongtin flex justify-center items-center text-yellow-300">
     <span className="font-bold text-yellow-300">Coupon 10% khi bạn đăng ký là thành viên của CKD</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Noti;