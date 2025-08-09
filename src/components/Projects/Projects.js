import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import rest from "../../Assets/Projects/Rest.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import ecom from "../../Assets/Projects/E-commerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rest}
              isBlog={false}
              title="Restaurant Management Suit"
              description="A full-stack React + Node.js/Express + MongoDB restaurant management system with table booking, food ordering, payment, billing, and admin dashboard features.
It offers secure authentication, real-time order status updates, and an intuitive, responsive UI for both customers and admins."
              ghLink="https://github.com/CreativeCoder-Sid/TheHungryHeaven"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce Website"
              description="A React-based eCommerce frontend website with product listings, filtering, sorting, cart, wishlist, and pagination features.
It provides a responsive, user-friendly interface with dynamic search and category-based navigation for a smooth shopping experience."
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
