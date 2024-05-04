import { Col, Container, Row } from "react-bootstrap";
import "./Contactus-style.css";

const Contactus = () => {
  return (
    <div className="contact">
      <h2 className="text-top">Contact Us</h2>
      <p className="text-down">Lorem ipsum dolor sit amet</p>
      <Container className="d-flex justify-content-around">
        <Row lg={4}>
          <Col lg={12}>
            <div className="deatils">
              <div className="adress">
                <h6>Address:</h6>
                <p>11 West Town</p>
                <p>PBo 12345, United States</p>
              </div>
              <div className="phone">
                <h6>Phone:</h6>
                <p>+1 1234 56 789</p>
                <p>+1 1234 56 780</p>
              </div>
              <div className="email">
                <h6>Email:</h6>
                <p>info@example.com</p>
                <p>email@example.com</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row lg={8}>
          <div className="form">
            <Col md={12} className="d-flex">
              <input type="text" value={"Name*"} className="form-control " />{" "}
              <input
                type="email"
                name=""
                id=""
                value={"Email"}
                className="form-control "
              />
            </Col>
            <Col md={12}>
              <input type="text" value={"Subject"} className="form-control" />
            </Col>
            <Col md={12}>
              {" "}
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={"Write Your Massage"}
                className="form-control"
              ></textarea>
            </Col>
            <Col md={12}>
              {" "}
              <input type="button" value="Send Massage" className="button" />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contactus;
