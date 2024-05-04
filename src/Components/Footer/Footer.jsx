import { Col, Container, Row } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuPhoneIncoming } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import "./Footer-style.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="left-footer">
              <img src="src\assets\News\logo.png" alt="" className="logo" />
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
                <h4>Follow us</h4>
              </div>
              <div className="icons">
                {" "}
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
            </div>
          </Col>
          <Col>
            <div className="services-footer">
              <h2>Services</h2>
              <ul className="list">
                <li> Web Design</li>
                <li>App Developemnt</li>
                <li>Cloud Services</li>
                <li>Domain Adn Hosting</li>
                <li>Seo Optimization</li>
                <li>Social Media</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="information-footer">
              <h2>Information</h2>
              <ul className="list">
                <li>About</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Team</li>
                <li>Blogs</li>
                <li> Blog Details</li>
                <li>Coming Soon</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="contacts-footer">
              <h2>Contacts</h2>
              <div className="text">
                <p>
                  {" "}
                  <FaMapMarkerAlt />
                  101 West Town , PBO 12345, United States
                </p>
                <p>
                  <LuPhoneIncoming />
                  +1 1234 56 789
                </p>
                <p>
                  {" "}
                  <IoIosMail />
                  contact@example.com
                </p>
                <h4>Newsletter</h4>
                <p>
                  Dont miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div className="button-contacts">
                <input type="button" value="Email Adress" />
                <FaTelegram />{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
