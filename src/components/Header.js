import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "./theme";

//components
import { Btn } from "./atoms/Button";

export const MainHeader = () => {
  //login 전/후 조건에 따른 헤더
  const isLogin = null;

  return (
    <Main>
      <Link to="/">
        <Btn
          btnText="The Imaginarium"
          color={theme.color.white}
          width="11rem"
          height="5rem"
          size="1.7rem"
          fontFamily="BMDOHYEON"
        />
      </Link>
      <div>
        {isLogin ? null : (
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
  border-bottom: 1px solid ${theme.color.white};
  width: 98%;
  /* max-width: 480px; */
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
`;
