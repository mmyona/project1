import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

//components
import { Btn } from "./atoms/Button";
import { SearchInput } from "./atoms/Input";

export const MainHeader = () => {
  //login 전/후 조건에 따른 헤더
  const isLogin = null;

  return (
    <Main>
      <Link to="/">
        <Btn btnText="Logo" color={theme.color.white} width="8rem" />
      </Link>
      <Link to="/info">
        <Btn btnText="서비스 소개" color={theme.color.white} width="8rem" />
      </Link>
      <Link to="/list">
        <Btn btnText="전시 둘러보기" color={theme.color.white} width="8rem" />
      </Link>
      <Link to="/request">
        <Btn btnText="전시 의뢰하기" color={theme.color.white} width="8rem" />
      </Link>
      <Link to="/center">
        <Btn btnText="고객 센터" color={theme.color.white} width="8rem" />
      </Link>
      <SearchInput />
      <div>
        {isLogin ? (
          <Link to="/mypage">
            <Btn btnText="my page" color={theme.color.white} width="6rem" />
          </Link>
        ) : (
          <>
            <Link to="/login">
              <Btn btnText="login" color={theme.color.white} width="6rem" />
            </Link>
            <Link to="/signup">
              <Btn btnText="signup" color={theme.color.white} width="6rem" />
            </Link>
          </>
        )}
      </div>
    </Main>
  );
};

const Main = styled.div`
  background-color: #030824;
  width: 100%;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0 1.3rem;
  img {
    height: 9rem;
  }
`;
