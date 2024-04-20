import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Information-style.css";

const Information = () => {
  return (
    <div className="inf">
      {" "}
      <Container>
        <Row>
          <Col>
            <div className="box">
              <img src="src\assets\News\icons\service-design.svg" alt="" />
              <h4>Application Design</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col>
            <div className="box">
              <img src="src\assets\News\icons\service-hosting.svg" alt="" />{" "}
              <h4>Web Hosting</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col>
            <div className="box">
              <img src="src\assets\News\icons\service-social.svg" alt="" />
              <h4>Social Media</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="box">
              <img src="src\assets\News\icons\service-seo.svg" alt="" />{" "}
              <h4>SEO Optimization</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col>
            <div className="box">
              <img src="src\assets\News\icons\service-cloud.svg" alt="" />{" "}
              <h4>Cloud Server</h4>
              <p>
                Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col>
            <div className="box">
              <img src="src\assets\News\icons\service-secure.svg" alt="" />{" "}
              <h4>Data Secuity</h4>
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

export default Information;
