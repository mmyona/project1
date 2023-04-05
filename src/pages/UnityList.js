import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Link } from "react-router-dom";

//components
import { Btn } from "../components/atoms/Button";

export const UnityList = () => {
  return (
    <>
      <Link to="/unity1">
        <Btn
          btnText="Click Unity1"
          color={theme.color.white}
          width="11rem"
          height="5rem"
          fontsize="1.7rem"
        />
      </Link>
      <Link to="/unity2">
        <Btn
          btnText="Click Unity2"
          color={theme.color.white}
          width="11rem"
          height="5rem"
          fontsize="1.7rem"
        />
      </Link>
    </>
  );
};
