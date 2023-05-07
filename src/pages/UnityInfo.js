import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";

export const UnityInfo = () => {
  return (
    <InfoContainer>
      <h2>Title</h2>
      <p>content</p>
      <Btn btnText="전시 입장" width="6rem" type="submit" />
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
