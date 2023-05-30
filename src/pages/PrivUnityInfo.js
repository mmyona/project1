import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";
import { Link } from "react-router-dom";
import { Content } from "../components/Content";
import { useParams } from "react-router-dom";
import { PrivUnityListData } from "../dummy/PrivUnityListData";

export const PrivUnityInfo = () => {
  const { unityId } = useParams();
  const userId = localStorage.getItem("userId");
  const unityMap = PrivUnityListData[unityId - 1];
  return (
    <InfoContainer>
      <h1>{unityMap.title}</h1>
      <img alt="썸네일 이미지" src={unityMap.src} />
      <div>
        <h3>맵 설명</h3>
        <p>{unityMap.text}</p>
      </div>
      <Content />
      <p>로그인을 하셔야 전시 내부에서 방명록을 작성할 수 있습니다</p>
      <Link to={`/login`}>
        <Btn
          btnText="로그인하러 가기"
          width="12rem"
          type="submit"
          fontFamily="Bebas Neue"
          fontsize="1.4rem"
          color={theme.color.gray}
          margin="0 0 0 1rem"
        />
      </Link>
      <p>ESC 버튼을 누르면 전시를 종료할 수 있습니다</p>
      <p>전시에 입장하려면 아래의 버튼을 누르세요</p>
      <Link to={`/unity${unityId}?userid=${userId == null ? -1 : userId}`}>
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
    white-space: pre-wrap;
  }
  img {
    width: 70%;
    margin-bottom: 2rem;
  }
`;
