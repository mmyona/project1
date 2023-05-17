import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { Content } from "../components/Content";

export const UnityInfo = () => {
  return (
    <InfoContainer>
      <h2>Title</h2>
      <Content />
      <Link to="/unity1">
        <Btn btnText="전시 입장" width="6rem" type="submit" />
      </Link>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
