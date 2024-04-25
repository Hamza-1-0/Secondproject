import "./Portfolio-style.css";
import { Container } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="text-top">Our Portfolio</h2>
      <p className="text-down">Lorem ipsum dolor sit amet</p>
      <Container>
        <div className="btn-group">
          <button className="change">ALL</button>
          <button className="change">App Design</button>
          <button className="change">App Development</button>
          <button className="change">Branding</button>
          <button className="change">It Solutions</button>
        </div>
        <div className="Group">
          <div className="image">
            <img src="src\assets\News\portifolio\product-1.jpg" alt="" />
          </div>
          <div className="image">
            <img src="src\assets\News\portifolio\product-2.jpg" alt="" />
          </div>
          <div className="image">
            <img src="src\assets\News\portifolio\product-3.jpg" alt="" />
          </div>
        </div>
        <div className="Group">
          <div className="image">
            <img src="src\assets\News\portifolio\product-4.jpg" alt="" />
          </div>
          <div className="image">
            <img src="src\assets\News\portifolio\product-5.jpg" alt="" />
          </div>
          <div className="image">
            <img src="src\assets\News\portifolio\product-6.jpg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
