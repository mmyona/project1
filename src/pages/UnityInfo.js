import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { Content } from "../components/Content";
import { useParams } from "react-router-dom";
import { UnityListData } from "../dummy/UnityListData";

export const UnityInfo = () => {
  const { unityId } = useParams();
  const userId = localStorage.getItem("userId");
  const unityMap = UnityListData[unityId - 1];
  return (
    <InfoContainer>
      <h1>{unityMap.title}</h1>
      <FlexContainer>
        <img alt="썸네일 이미지" src={unityMap.src} />
        <div>
          <h3>맵 설명</h3>
          <p>{unityMap.text}</p>
        </div>
      </FlexContainer>
      <Content />
      <p>전시에 입장하려면 밑의 버튼을 누르세요</p>
      <Link to={`/unity${unityId}?userid=${userId}`}>
        <Btn
          btnText="Enter"
          width="4rem"
          type="submit"
          fontFamily="Bebas Neue"
          fontsize="1.4rem"
          color={theme.color.gray}
          margin="0 0 0 1rem"
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
  h1 {
    font-family: "Bebas Neue", sans-serif;
  }
  h3 {
    line-height: 3rem;
  }
  p {
    line-height: 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  img {
    height: 27rem;
  }
  div {
    padding: 1rem;
    p {
      white-space: pre-wrap;
    }
  }
`;
