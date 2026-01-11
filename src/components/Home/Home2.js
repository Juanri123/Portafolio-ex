import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Junior Full Stack Developer</b> passionate
              about building functional, scalable, and user-centered web
              applications. I enjoy turning ideas into real solutions that solve
              real problems.
              <br />
              <br />
              I have experience working with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, Java, and PHP{" "}
                </b>
              </i>
              across both frontend and backend development.
              <br />
              <br />
              My main focus is on developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, RESTful APIs,{" "}
                </b>
              </i>
              and clean, maintainable software using agile methodologies.
              <br />
              <br />
              I enjoy working with
              <b className="purple"> Node.js </b> on the backend and modern
              frameworks like{" "}
              <i>
                <b className="purple">React</b> and{" "}
                <b className="purple">Angular</b>
              </i>{" "}
              on the frontend, always paying attention to UX/UI best practices.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
