import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

//components
import { UnityItem } from "../components/UnityItem";
import { UnityListData } from "../dummy/UnityListData";

export const UnityList = () => {
  return (
    <Container>
      <Row>
        {UnityListData.map((item) => (
          <Col key={item.id} xs={7} md={6} lg={5} xl={4} xxl={3}>
            <UnityItem
              src={item.src}
              title={item.title}
              text={item.text}
              link={`/publist/${item.id}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
