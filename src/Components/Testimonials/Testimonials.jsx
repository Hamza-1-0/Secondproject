import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials-style.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { IoStarSharp } from "react-icons/io5";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Container } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="text-top">Testimonials</h2>
      <p className="text-down">Lorem ipsum dolor sit amet</p>

      <Container>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card-test">
              <div className="content-top">
                <img
                  src="src\assets\News\testimonial\testimonial-1.jpg"
                  alt=""
                />
                <div className="content-text">
                  <h3>John Doe</h3>
                  <p>CFO</p>
                  <div className="stars">
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                  </div>
                </div>
              </div>
              <div className="content-down">
                <p>
                  {" "}
                  <FaQuoteLeft className="icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <FaQuoteRight className="icon-right" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card-test">
              <div className="content-top">
                <img
                  src="src\assets\News\testimonial\testimonial-2.jpg"
                  alt=""
                />
                <div className="content-text">
                  <h3>Afa Rose</h3>
                  <p>Web Designer</p>
                  <ul className="stars">
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-down">
                <p>
                  {" "}
                  <FaQuoteLeft className="icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <FaQuoteRight className="icon-right" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card-test">
              <div className="content-top">
                <img
                  src="src\assets\News\testimonial\testimonial-3.jpg"
                  alt=""
                />
                <div className="content-text">
                  <h3>Keena lara</h3>
                  <p>Store Owner</p>
                  <ul className="stars">
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-down">
                <p>
                  {" "}
                  <FaQuoteLeft className="icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <FaQuoteRight className="icon-right" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card-test">
              <div className="content-top">
                <img
                  src="src\assets\News\testimonial\testimonial-4.jpg"
                  alt=""
                />
                <div className="content-text">
                  <h3>Fizzi Prandon</h3>
                  <p>Freelancer</p>
                  <ul className="stars">
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-down">
                <p>
                  {" "}
                  <FaQuoteLeft className="icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <FaQuoteRight className="icon-right" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-test">
              <div className="content-top">
                <img
                  src="src\assets\News\testimonial\testimonial-1.jpg"
                  alt=""
                />
                <div className="content-text">
                  <h3>John Doe</h3>
                  <p>CFO</p>
                  <ul className="stars">
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-down">
                <p>
                  {" "}
                  <FaQuoteLeft className="icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <FaQuoteRight className="icon-right" />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card-test">
              <div className="content-top">
                <img
                  src="src\assets\News\testimonial\testimonial-2.jpg"
                  alt=""
                />
                <div className="content-text">
                  <h3>Afa Rose</h3>
                  <p>Web Designer</p>
                  <ul className="stars">
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                    <li>
                      <IoStarSharp />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-down">
                <p>
                  {" "}
                  <FaQuoteLeft className="icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam.
                  <FaQuoteRight className="icon-right" />
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
