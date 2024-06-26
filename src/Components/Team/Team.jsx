import { Container, Row, Col } from "react-bootstrap";
import "./Team-style.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <div className="team">
      <h2 className="text-top">Team</h2>
      <p className="text-down">Lorem ipsum dolor sit amet</p>
      <Container>
        <Row>
          <Col>
            <div className="box-team">
              <img src="src\assets\News\team\team-1.jpg" alt="" />
              <div className="text-team">
                <h4>Jhone Bi</h4>
                <p>Application Manager</p>
              </div>
              <div className="icons-team">
                <a href="">
                  <FaTwitter className="icon" />
                </a>
                <a href="">
                  <FaFacebook className="icon" />
                </a>
                <a href="">
                  <FaLinkedin className="icon" />
                </a>
                <a href="">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box-team">
              <img src="src\assets\News\team\team-2.jpg" alt="" />
              <div className="text-team">
                <h4>Sani Awesome</h4>
                <p>Social Media</p>
              </div>
              <div className="icons-team">
                <a href="">
                  <FaTwitter className="icon" />
                </a>
                <a href="">
                  <FaFacebook className="icon" />
                </a>
                <a href="">
                  <FaLinkedin className="icon" />
                </a>
                <a href="">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box-team">
              <img src="src\assets\News\team\team-3.jpg" alt="" />
              <div className="text-team">
                <h4>Andrio Willi</h4>
                <p>Content Writer</p>
              </div>
              <div className="icons-team">
                <a href="">
                  <FaTwitter className="icon" />
                </a>
                <a href="">
                  <FaFacebook className="icon" />
                </a>
                <a href="">
                  <FaLinkedin className="icon" />
                </a>
                <a href="">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box-team">
              <img src="src\assets\News\team\team-4.jpg" alt="" />
              <div className="text-team">
                <h4>Afa Jonson</h4>
                <p>Business Manager</p>
              </div>
              <div className="icons-team">
                <a href="">
                  <FaTwitter className="icon" />
                </a>
                <a href="">
                  <FaFacebook className="icon" />
                </a>
                <a href="">
                  <FaLinkedin className="icon" />
                </a>
                <a href="">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
