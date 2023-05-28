import React from "react";
import styled from "styled-components";
import { KLogin } from "../components/KLogin";
import theme from "../components/theme";

export const Login = () => {
  return (
    <LContainer>
      <KLogin />
    </LContainer>
  );
};

const LContainer = styled.div`
  padding: 10rem;
`;

export const Wrapper = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  input {
    margin: 0 auto;
  }

  p {
    color: ${theme.color.red};
    padding-left: 2rem;
    margin-top: 0.5rem;
  }
  .w {
    width: 34rem;
  }
`;
