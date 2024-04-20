import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header-style.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="head">
      {" "}
      <Container>
        <Row>
          <Col></Col>
          <Col className="info">
            <div className="text">
              <h1>
                Delivering Superior Services <span>IT Solutions.</span>
              </h1>
              <p>
                You can easily change any design to your own. It is also highly
                customizable SEO friendly template.
              </p>
            </div>
            <div className="social">
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className="btn">
              <button className="Get-1">Get Quotes</button>
              <button className="Get-2">Get Started</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
