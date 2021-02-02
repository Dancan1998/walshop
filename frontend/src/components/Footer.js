import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-5 footer">
            <h5>Copyright &copy; {new Date().getFullYear()} Dancan Chibole </h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
