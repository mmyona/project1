import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "./theme";

//components
import { Btn } from "./atoms/Button";
import { SearchInput } from "./atoms/Input";

export const MainHeader = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const isLogin = null;
  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const handleSearch = (e) => {
    e.preventDefault();
    /*setPage(1);
		setHasMoreData(true);
		getPostList();*/
  };
  return (
    <>
      <StyledHeader>
        <Link to={"/"} className="nav-logo-link">
          <img alt="logo" src="images/The Imaginarium (2).png" />
        </Link>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link to="/info">
              <Btn
                btnText="서비스 소개"
                color={theme.color.white}
                width="8rem"
              />
            </Link>
          </li>
          <li>
            <Link to="/list">
              <Btn
                btnText="전시 둘러보기"
                color={theme.color.white}
                width="8rem"
              />
            </Link>
          </li>
          <li>
            <Link to="/request">
              <Btn
                btnText="전시 의뢰하기"
                color={theme.color.white}
                width="8rem"
              />
            </Link>
          </li>
          <li>
            <Link to="/center">
              <Btn btnText="고객 센터" color={theme.color.white} width="8rem" />
            </Link>
          </li>
          <div className="searchInput">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") handleSearch(e);
              }}
            />
          </div>
          <li>
            {isLogin ? (
              <Link to="/mypage">
                <Btn btnText="my page" color={theme.color.white} width="6rem" />
              </Link>
            ) : (
              <div>
                <Link to="/login">
                  <Btn btnText="login" color={theme.color.white} width="6rem" />
                </Link>
                <Link to="/signup">
                  <Btn
                    btnText="signup"
                    color={theme.color.white}
                    width="6rem"
                  />
                </Link>
              </div>
            )}
          </li>
        </NavManu>
        <FontAwesomeIcon
          icon={faBars}
          className="menuToggleBtn"
          onClick={handleToggleOpen}
        />
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 0 1.3rem;
  top: 0;
  left: 0;
  right: 0;
  height: 5.2rem;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 2rem;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  img {
    height: 5.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    .searchInput {
      display: none;
    }
  }
`;
