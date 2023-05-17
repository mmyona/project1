import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

//components
import { UnityItem } from "../components/UnityItem";

export const UnityList = () => {
  const data = [
    {
      id: 1,
      title: "Chess",
      text: " 남녀노소 누구나 즐길 수 있는 보드게임인 체스를 컨셉으로 한 3D맵, 체스판이라는 무대 위에서 움직이는 것이 PLAYER의 머릿속에서 움직인다는 느낌을 준다.",
      src: "images/chess.png",
    },
    {
      id: 2,
      title: "Park",
      text: "현실에서는 여러모로 전시가 힘든 공간이 있다. 대부분의 전시가 실내에서 이루어지는 이유가 바로 그것인데, 이를 기반으로 야외에서의 무대를 제작하기로 하였다.자연경관과 비슷한 느낌을 주는 공원, 특히 연못 위에서의 전시는 실현이 어렵기 때문에 공원이라는 컨셉의 3D맵은 보통의 전시에서는 느낄 수 없는 개방감을 선사해줄것이라 기대된다.",
      src: "images/park.png",
    },
    {
      id: 3,
      title: "Plaza",
      text: " 위 두 맵과는 반대로 현실과 가장 비슷한 3D맵도 제작하였다. 직접 전시에 가지 않아도 된다는 느낌을 살리기 위해 실제 전시회를 참고하여 만들었다.맵에 놓인 주사위, 볼펜, 맵 중앙의 나무 등 여러모로 잡동사니를 두어 심심한 공간을 채워주었다.",
      src: "images/plaza.png",
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
              link={`/list/${item.id}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
