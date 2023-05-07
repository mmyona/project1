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
  padding: 2rem;
  font-size: 0.8rem;
  p {
    color: ${theme.color.gray};
  }
`;
