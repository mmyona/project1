import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { Content } from "../components/Content";
import { useParams } from "react-router-dom";

export const UnityInfo = () => {
  const { unityId } = useParams();
  return (
    <InfoContainer>
      <h2>Title</h2>
      <Content />
      <Link to={`/unity${unityId}`}>
        <Btn
          btnText="Enter"
          width="4rem"
          type="submit"
          fontFamily="Bebas Neue"
          fontsize="1.4rem"
          color={theme.color.gray}
        />
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
  h2 {
    font-family: "Bebas Neue", sans-serif;
  }
`;
