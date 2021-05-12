import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import img from "./ana.jpeg";

const MsgCard = () => {
  return (
    <Row className="msg-item ">
      <Col xs={3}>
        <Image src={img} roundedCircle />
      </Col>
      <Col className="pe-0" xs={6}>
        <h6>Iliyas Boumour</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          asperiores tenetur autem obcaecati ex fugit repudiandae neque nobis
          quas dignissimos earum dolore ab facere minus aliquid, delectus
          reiciendis beatae. Quis!
        </p>
      </Col>
      <Col className="pe-0" xs={3}>
        <p>18/06/2020</p>
      </Col>
    </Row>
  );
};

export default MsgCard;
