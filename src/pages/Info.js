import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import { Btn } from "../components/atoms/Button";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <InfoContainer>
      <div>
        <h2>"The Imaginarium"</h2>
        <p>
          코로나19를 기반으로 메타버스 산업이 확장하면서 메타버스를 활용한 문화
          콘텐츠 사례가 크게 증가하였다.
          <br />
          그와 동시에 팬데믹으로 인해 전국적으로 전시 공간은 크게 감소하였다.
          <br />
          그로 인한 비대면 공간의 수요는 비약적으로 증가하였고, 이를 발판 삼아
          우리의 서비스 "The Imaginarium"이 탄생하였다.
          <br />
          The Imaginarium은 쉽게 말하자면 웹 사이트를 이용한 온라인 가상 전시
          플랫폼이다.
          <br />웹 사이트를 통하여 쉽게 서비스에 접속이 가능하며, 온라인으로
          손쉽게 전시를 관람할 수 있다.
        </p>
        <img alt="metaverse" src="images/12.png" />
        <p>
          본 서비스는 전시를 진행하고자 하는 아티스트를 위한 맞춤 전시 공간을
          생성해 준다.
          <br />
          후에 이 전시 공간은 웹 서비스 상에 전시되어 서비스 이용자들에게
          보여진다.
          <br />
          전시 공간에 대한 공개 범위 또한 설정이 가능하다.
          <br />
          모두에게 보여지는 public 전시와 접근 권한을 지닌 이용자들만이 볼 수
          있는 private 전시로 나누어진다.
          <br />
          Private 전시의 경우에는 비밀번호 등의 접근 권한 테스트가 전시 관람
          전에 진행될 예정이다.
        </p>
        <img alt="metaverse" src="images/16.png" />
      </div>
      <div>
        <h2>Our features</h2>
        <p>
          아티스트들이 저렴하게 전시 공간을 구할 수 있으며, 사용자들은 시공간의
          제약 없이 작품 관람이 가능하다.
          <br /> 방명록 댓글을 통해 각 전시에 대한 다양한 의견을 공유할 수 있다.
          (로그인 이후 가능)
          <br />
          유니티 맵에서는 현실에서 구현하기 힘든 효과들을 사용하여 공간을
          자유롭게 구축할 수 있다
          <br /> 공적인 예술 작품 전시를 넘어서 자유롭게 개인의 공간 창작이
          가능하다.
          <br /> VR을 이용하여 감상할 수 있도록 하여 몰입도를 향상시킨다.
        </p>
        <img alt="metaverse" src="images/13.png" />
      </div>
      <div>
        <h2>Our expectation</h2>
        <p>
          작품 전시뿐만 아니라 행사 및 문화재 홍보의 공간으로 활용할 수 있다.
          <br /> 시간과 비용을 절약하며 문화 예술을 향유할 수 있다.
          <br /> 비교적 쉽게 다양한 아티스트의 작품 홍보 가능
          <br /> 그림, 사진, 조각물, 영상 등 다양한 형태의 작품을 시공간의 제약
          없이 전시 가능하기 때문에 이를 통해 문화 콘텐츠의 다양성 증가 효과를
          기대해볼 수 있다.
          <br />
          결혼식이나 졸업식 등 큰 행사에 활용 가능하기 때문에 특별한 추억을
          공간으로 시각화하여 간직할 수 있다.
          <br />
        </p>
        <img alt="metaverse" src="images/15.png" />
      </div>
      <p>지금 바로 전시를 둘러 보고 싶다면 아래의 버튼을 눌러주세요.</p>
      <Link to="/publist">
        <Btn
          btnText="look around"
          width="10rem"
          type="submit"
          fontFamily="Bebas Neue"
          fontsize="1.8rem"
          margin="0 0 2rem  0"
        />
      </Link>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
p{
  line-height:2rem;
}
h2 {
  font-family: "Bebas Neue", sans-serif;
  font-size:2.5rem;
  line-height:7rem;
  border-bottom:0.1px solid white;
  margin-bottom:2rem;
}
  div{
    width:60rem;
    padding:1rem;
  }
  }
`;
