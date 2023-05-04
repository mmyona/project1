import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

//components
import { UnityItem } from "../components/UnityItem";

export const UnityList = () => {
  const data = [
    {
      id: 1,
      title: "unity1",
      text: "The first",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 2,
      title: "unity2",
      text: "The second",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 3,
      title: "unity3",
      text: "The third",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 4,
      title: "unity4",
      text: "The forth",
      src: "images/The Imaginarium (2).png",
    },
    {
      id: 5,
      title: "unity5",
      text: "The fifth",
      src: "images/The Imaginarium (2).png",
    },
  ];

  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col key={item.id} xs={7} md={6} lg={5} xl={4} xxl={3}>
            <UnityItem
              src={item.src}
              title={item.title}
              text={item.text}
              link={`/${item.title}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
