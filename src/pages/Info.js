import React from "react";
import styled from "styled-components";
import theme from "../components/theme";

export const Info = () => {
  return (
    <InfoContainer>
      <div>
        <h2>서비스 제안 동기</h2>
        <p>
          메타버스 산업이 확장하면서 메타버스를 활용한 문화콘텐츠 사례 증가
          <br />
          팬데믹으로 인해 전국적으로 전시공간 감소 , 비대면 공간의 수요 증가
        </p>
        <img alt="metaverse" src="images/12.png" />
      </div>
      <div>
        <h2>제안 아이디어</h2>
        <p>
          웹 사이트를 이용한 온라인 가상 전시 플랫폼
          <br /> 웹 사이트를 통하여 이용자들이 쉽게 서비스에 접속 가능
          <br /> HMD를 이용한 작품 감상
          <br /> 유니티 엔진을 사용하여 공간 생산성 향상
        </p>
        <img alt="metaverse" src="images/16.png" />
      </div>
      <div>
        <h2>차별화 및 특장점</h2>
        <p>
          아티스트들이 저렴하게 전시 공간을 구할 수 있으며, 사용자들은 시공간의
          제약 없이 작품 관람 가능
          <br /> 방명록 댓글을 통해 각 전시에 대한 다양한 의견 공유
          <br />
          현실에서 구현하기 힘든 효과들을 사용하여 공간 구축
          <br /> 공적인 예술 작품 전시를 넘어서 자유롭게 개인의 공간 창작 가능
          <br /> VR을 이용하여 감상할 수 있도록 하여 몰입도 향상
        </p>
        <img alt="metaverse" src="images/13.png" />
      </div>
      <div>
        <h2>추후 활용 방안 및 기대 효과</h2>
        <p>
          작품 전시뿐만 아니라 행사 및 문화재 홍보의 공간으로 활용 가능
          <br /> 시간과 비용을 절약하며 문화 예술 향유 가능
          <br /> 비교적 쉽게 다양한 아티스트의 작품 홍보 가능
          <br /> 그림, 사진, 조각물, 영상 등 다양한 형태의 작품을 시공간의 제약
          없이 전시 가능 → 이를 통해 문화 콘텐츠의 다양성 증가 효과 기대
          <br />
          결혼식이나 졸업식 등 큰 행사에 활용 가능 → 특별한 추억을 공간으로
          시각화하여 간직 가능
          <br />
        </p>
        <img alt="metaverse" src="images/15.png" />
      </div>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div{
    width:60rem;
    padding:1rem;
  }
  }
`;
