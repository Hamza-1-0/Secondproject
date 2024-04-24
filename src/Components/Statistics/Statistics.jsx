import React from "react";
import "./Statistics-style.css";
import { Container } from "react-bootstrap";
const Statistics = () => {
  return (
    <div className="statistics">
      <Container>
        <div className="data-web">
          <div className="data-stas">
            <img src="src\assets\News\icons\happy-clients.svg" alt="" />
            <div className="text">
              <h5>232</h5>
              <h3>Happy Clients</h3>
              <p>consequuntur quae diredo</p>
            </div>
          </div>
          <div className="data-stas">
            <img src="src\assets\News\icons\complete-projects.svg" alt="" />
            <div className="text">
              <h5>521</h5>
              <h3>Completed Projects</h3>
              <p>adipisci atque quia aut</p>
            </div>
          </div>
          <div className="data-stas">
            <img src="src\assets\News\icons\hours-support.svg" alt="" />
            <div className="text">
              <h5>453</h5>
              <h3>Hours Of Support</h3>
              <p>aut commodi quaerat</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
