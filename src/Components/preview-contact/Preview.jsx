import { Col, Container, Row } from "react-bootstrap";
import "./Preview-style.css";

const Preview = () => {
  return (
    <div className="preview">
      <Container>
        <Row>
          <Col>
            <div className="contact-prev">
              <h3> Lets Discuss your Projects</h3>
              <p>
                We pride ourselves with our ability to perform and deliver
                results. Use the form below to discuss your project needs with
                our team, we will get back asap
              </p>
              <button>Contact Us</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Preview;
