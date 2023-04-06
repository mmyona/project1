import React from "react";
import styled from "styled-components";
import theme from "../components/theme";

//components
import Avatar from "../components/atoms/Avatar";
import { Btn } from "../components/atoms/Button";

export const Mypage = () => {
  return (
    <Container>
      <div>
        <Avatar width="10rem" />
        <Btn
          btnText="이미지 수정"
          width="6rem"
          fontsize="0.8rem"
          type="submit"
        />
      </div>
      <div>
        <p>유저 이름</p>
        <div className="col">
          <p>유저 e-mail</p>
          <Btn
            btnText="e-mail 변경"
            width="6rem"
            fontsize="0.8rem"
            type="submit"
          />
        </div>
        <div className="col">
          <p>핸드폰 번호</p>
          <Btn
            btnText="핸드폰 번호 변경"
            width="8rem"
            fontsize="0.8rem"
            type="submit"
          />
        </div>
        <Btn
          btnText="비밀 번호 확인 / 변경"
          width="8rem"
          fontsize="0.8rem"
          type="submit"
        />
        <p>북마크 목록</p>
        <Btn btnText="회원 탈퇴" width="6rem" fontsize="0.8rem" type="submit" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .col {
    display: flex;
    flex-direction: colunm;
  }
`;
