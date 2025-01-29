import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light py-4 text-center">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none"
              style={{ width: "40px", height: "40px" }}
            >
              <FaFacebookF />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none"
              style={{ width: "40px", height: "40px" }}
            >
              <FaTwitter />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none"
              style={{ width: "40px", height: "40px" }}
            >
              <FaLinkedinIn />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center border border-secondary rounded-circle p-2 mx-2 text-dark text-decoration-none"
              style={{ width: "40px", height: "40px" }}
            >
              <FaYoutube />
            </a>
          </Col>
        </Row>
        <p className="mb-1">Example@email.com</p>
        <p className="text-muted mb-0">Copyright © 2020 Name. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
