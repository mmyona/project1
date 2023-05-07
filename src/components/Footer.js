import React from "react";
import styled from "styled-components";
import theme from "./theme";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>copyright © 2023. The Imaginarium.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  p {
    color: ${theme.color.gray};
  }
`;
