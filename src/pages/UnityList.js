import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Link } from "react-router-dom";

//components
import { UnityItem } from "../components/UnityItem";

export const UnityList = () => {
  return (
    <ListContainer>
      <UnityItem
        width="20rem"
        title="first unity map"
        text="This is the first one."
        link="/unity1"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="25rem"
        title="second unity map"
        text="This is the second one."
        link="/unity2"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="15rem"
        title="third unity map"
        text="This is the third one."
        link="/unity3"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="17rem"
        title="forth unity map"
        text="This is the forth one."
        link="/unity4"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="22rem"
        title="second unity map"
        text="This is the fifth one."
        link="/unity5"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="21rem"
        title="second unity map"
        text="This is the second one."
        link="/unity2"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="25rem"
        title="second unity map"
        text="This is the second one."
        link="/unity2"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="15rem"
        title="second unity map"
        text="This is the second one."
        link="/unity2"
        src="images/The Imaginarium (2).png"
      />
      <UnityItem
        width="20rem"
        title="second unity map"
        text="This is the second one."
        link="/unity2"
        src="images/The Imaginarium (2).png"
      />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
