import React from "react";
import styled from "styled-components";
import theme from "./theme";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>The Imaginarium.</p>
      <p>이메일: example@example.com / 전화번호: 000-000-0000</p>
      <p>copyright © 2023. All rights reserved.</p>
      <p>from. Cyber Security Capstone Design</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  padding: 1rem;
  bottom: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  p {
    color: ${theme.color.gray};
  }
`;
