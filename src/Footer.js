import React from "react";

import { Col, Row } from "react-bootstrap/";
import {Facebook, Twitter,Linkedin,PlayBtn, Star} from "react-bootstrap-icons";

function Footer() {
  return (
    <Row className="py-5 border-top border-4 border-dark">
      <Col xs={12} md lg={6} className="p-5">
        <Row className="d-flex justify-content-center">
          <Col xs md lg={2} className="d-flex justify-content-center">
            <Facebook color="black" size={20} />
          </Col>
          <Col xs md lg={2} className="d-flex justify-content-center">
            <Twitter color="black" size={20} />
          </Col>
          <Col xs md lg={2} className="d-flex justify-content-center">
            <Linkedin color="black" size={20} />
          </Col>
          <Col xs md lg={2} className="d-flex justify-content-center">
            <PlayBtn color="black" size={20} />
          </Col>
        </Row>
      </Col>

      <Col xs={12} md lg={2} className="d-flex justify-content-center my-auto">
         <Star color="royalblue" size={75} />   
      </Col>

      <Col xs={12} md lg={2} className="d-flex justify-content-center my-auto ">
        <Row className="my-5">
          <h2>Company</h2>
        </Row>
      </Col>
    </Row>
  );
}
export default Footer;
