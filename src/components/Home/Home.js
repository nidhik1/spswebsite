import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import brainImg from "../../Assets/brain.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" >
              <div style={{ padding: 0, textAlign: "center"}}>
                <h1 className="heading-name">
                  SPS
                  Society of Psychology and Sociology
                </h1>
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20}} className="brainImg">
              <img src={brainImg} style={{ maxHeight: "550px"}}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
