import "./Pricing-style.css";
import { FaRegCheckCircle } from "react-icons/fa";

import { Container } from "react-bootstrap";
const Pricing = () => {
  return (
    <div className="pricing">
      <h2 className="text-top">Pricing Plans</h2>
      <p className="text-down">Lorem ipsum dolor sit amet</p>
      <Container className="d-flex">
        <div className="card">
          <div className="title">
            <h2>Basic</h2>
          </div>
          <div className="price">
            <p>
              <span>$</span> 25
            </p>
          </div>
          <ul className="addition">
            <li>
              <FaRegCheckCircle />
              Unlimited GB Space
            </li>
            <li>
              <FaRegCheckCircle />
              30 Domain Names
            </li>
            <li>
              <FaRegCheckCircle />
              Free SSL
            </li>
            <li>
              <FaRegCheckCircle />
              Daily Backup
            </li>
            <li>
              <FaRegCheckCircle />
              Free Templates
            </li>
            <li>
              <FaRegCheckCircle />
              Free Email
            </li>
            <li>
              <FaRegCheckCircle />
              10 Databases
            </li>
            <li>
              <FaRegCheckCircle />
              Unlimited Email Address
            </li>
            <li>
              <FaRegCheckCircle />
              Live Support
            </li>
          </ul>
          <div className="btn">
            <button>Order Now</button>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <h2>Standard</h2>
          </div>
          <div className="price">
            <p>
              <span>$</span> 50
            </p>
          </div>
          <ul className="addition">
            <li>
              <FaRegCheckCircle />
              Unlimited GB Space
            </li>
            <li>
              <FaRegCheckCircle />
              30 Domain Names
            </li>
            <li>
              <FaRegCheckCircle />
              Free SSL
            </li>
            <li>
              <FaRegCheckCircle />
              Daily Backup
            </li>
            <li>
              <FaRegCheckCircle />
              Free Templates
            </li>
            <li>
              <FaRegCheckCircle />
              Free Email
            </li>
            <li>
              <FaRegCheckCircle />
              10 Databases
            </li>
            <li>
              <FaRegCheckCircle />
              Unlimited Email Address
            </li>
            <li>
              <FaRegCheckCircle />
              Live Support
            </li>
          </ul>
          <div className="btn">
            <button>Order Now </button>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <h2>Premium</h2>
          </div>
          <div className="price">
            <p>
              <span className="plus">$</span> 100
            </p>
          </div>
          <ul className="addition">
            <li>
              <FaRegCheckCircle />
              Unlimited GB Space
            </li>
            <li>
              <FaRegCheckCircle />
              30 Domain Names
            </li>
            <li>
              <FaRegCheckCircle />
              Free SSL
            </li>
            <li>
              <FaRegCheckCircle />
              Daily Backup
            </li>
            <li>
              <FaRegCheckCircle />
              Free Templates
            </li>
            <li>
              <FaRegCheckCircle />
              Free Email
            </li>
            <li>
              <FaRegCheckCircle />
              10 Databases
            </li>
            <li>
              <FaRegCheckCircle />
              Unlimited Email Address
            </li>
            <li>
              <FaRegCheckCircle />
              Live Support
            </li>
          </ul>
          <div className="btn">
            <button>Order Now </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
