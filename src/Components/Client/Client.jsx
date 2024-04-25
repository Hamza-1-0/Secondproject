import { Container } from "react-bootstrap";
import "./Client-style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Client = () => {
  return (
    <div className="client">
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="src\assets\News\clients\client-1.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-2.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-3.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-4.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-5.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-6.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-7.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="src\assets\News\clients\client-8.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Client;
