import { Col, Container, Row } from "react-bootstrap";
import "./Blog-style.css";

const Blog = () => {
  return (
    <div className="blog">
      <h2 className="text-top">Blog</h2>
      <p className="text-down">Lorem ipsum dolor sit amet</p>
      <Container>
        <Row>
          <Col>
            <div className="card-blog">
              <div className="img-blog">
                <img src="src\assets\News\blog\blog-1.jpg" alt="" />
              </div>
              <div className="text-blog">
                <h5>Domain & Hosting</h5>
                <h2>
                  <a href="">How to host website on any hosting provider?</a>
                </h2>
                <p>William Bla</p>
                <h6>Feb 1, 2022</h6>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-blog">
              <div className="img-blog">
                <img src="src\assets\News\blog\blog-2.jpg" alt="" />
              </div>
              <div className="text-blog">
                <h5>Advertisement</h5>
                <h2>
                  <a href="">How to create add on google adwords?</a>
                </h2>
                <p>Jobi Ret</p>
                <h6>Oct 5, 2022</h6>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-blog">
              <div className="img-blog">
                <img src="src\assets\News\blog\blog-3.jpg" alt="" />
              </div>
              <div className="text-blog">
                <h5>Marketing</h5>
                <h2>
                  <a href="">What is digital marketing and why is important?</a>
                </h2>
                <p>Main Dow</p>
                <h6>Dec 22, 2022</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
