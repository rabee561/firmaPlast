import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Products from '../Products/Prodects';
import Customer_reviews from '../customer-reviews/customer-reviews';
import About from '../About/About';
import MyNavbar from '../Navbar/Navbar';
// استيراد أنماط Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
      <MyNavbar />
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'black',
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true /* el: '.custom-swiper-pagination' */ }}
          scrollbar={{ draggable: true }}
          style={{ height: '100%' }}
        >
          <SwiperSlide>
            <img
              src="https://fmplastik.com/storage/26/panner1.jpg"
              alt="Slide 1"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <h1 className="text-[28px] sm:text-[40px] md:text-[70px] font-black">
                The health product is the packaged product
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fmplastik.com/storage/29/Panner2.jpg"
              alt="Slide 2"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: 'white',
                transform: 'translate(-50% , -50%)',
                textAlign: 'center',
              }}
            >
              <h1 className="text-[28px] sm:text-[40px] md:text-[70px] font-black">
                Solution partner for packging
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>

        <section id="about">
          <About />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="customer-reviews">
          <Customer_reviews />
        </section>
      </div>
    </>
  );
}
