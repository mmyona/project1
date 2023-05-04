import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import Nav from "react-bootstrap/Nav";
import { Btn } from "../components/atoms/Button";

export const Center = () => {
  return (
    <CenterContainer>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/center">자주 하는 질문</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Q&A</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">전시 의뢰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">버그 제보</Nav.Link>
        </Nav.Item>
      </Nav>
    </CenterContainer>
  );
};

const CenterContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 960px; /* Nav 컴포넌트의 최대 너비 */
  margin: 0 auto;
`;
