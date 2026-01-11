import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Juan Manuel Rincón</span>{" "}
            from <span className="purple">Colombia</span>.
            <br />
            I’m a <span className="purple">Junior Full Stack Developer</span>{" "}
            with a strong interest in building scalable and user-focused web
            applications.
            <br />
            I have a background in{" "}
            <span className="purple">Software Analysis and Development</span>{" "}
            from <span className="purple">SENA</span>, and continuous training in
            full stack development.
            <br />
            <br />
            Outside of coding, I enjoy activities that help me grow both
            professionally and creatively:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Building personal projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving UI/UX experiences 🎨
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building software that solves real problems."
          </p>
          <footer className="blockquote-footer">Juan Manuel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
