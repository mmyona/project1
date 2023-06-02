import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

//components
import { PrivUnityItem } from "../components/PrivUnityItem";
import { PrivUnityListData } from "../dummy/PrivUnityListData";

export const PrivUnityList = () => {
  return (
    <Container>
      <Row>
        {PrivUnityListData.map((item) => (
          <Col key={item.id} xs={7} md={6} lg={5} xl={4} xxl={3}>
            <PrivUnityItem
              src={item.src}
              title={item.title}
              text={item.text}
              id={item.id}
              link={`/privlist/${item.id}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
