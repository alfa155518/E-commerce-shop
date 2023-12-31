




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SlideCategories() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require('../images/slide shop/f1.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/f2.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/f3.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/f4.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/f5.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/f6.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/n1.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/n2.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/n3.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/n4.jpg')} alt='img-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../images/slide shop/n5.jpg')} alt='img-slide'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
