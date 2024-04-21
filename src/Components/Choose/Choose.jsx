import "./Choose-style.css";
import { Container, Row, Col } from "react-bootstrap";
import Icon1 from "./../../assets/News/icons/icon-1.svg";
const Choose = () => {
  return (
    <div className="choose">
      <h2>Why Choose Us</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <Container className="d-flex">
        <Row className="cont">
          <Col>
            {/* <div className="text-choose">
              <div className="icon">
                <img src="src\assets\News\icons\icon-1.svg" alt="" />
              </div>
              <h4>Experience</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div> */}
            <div className="test-class">
              <div>
                <h1>Experience</h1>
                <p>
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
              <img src={Icon1} alt="" width={75} />
            </div>
          </Col>
          <Col>
            <div className="text-choose">
              <h4>Products</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div className="icon">
              <img src="src\assets\News\icons\icon-2.svg" alt="" />
            </div>
          </Col>
          <Col>
            <div className="text-choose">
              <h4>Approach</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div className="icon">
              <img src="src\assets\News\icons\icon-3.svg" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="cont">
          <img src="src\assets\News\features.jpg" alt="" className="mid" />
        </Row>
        <Row className="cont">
          <Col>
            {" "}
            <div className="icon">
              <img src="src\assets\News\icons\icon-4.svg" alt="" />
            </div>
            <div className="text-choose">
              <h4>Pricing</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="icon">
              <img src="src\assets\News\icons\icon-5.svg" alt="" />
            </div>
            <div className="text-choose">
              <h4>Delivery</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col>
            <div className="icon">
              <img src="src\assets\News\icons\icon-6.svg" alt="" />
            </div>{" "}
            <div className="text-choose">
              <h4>Approach</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Choose;
