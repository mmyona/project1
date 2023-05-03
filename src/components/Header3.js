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
  const [activeMenu, setActiveMenu] = useState(0);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    if (isToggleOpen) setIsToggleOpen(!isToggleOpen); //토글 메뉴가 열려 있으면, 메뉴를 닫는다
  };

  const isLogin = true;
  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const handleSearch = (e) => {
    e.preventDefault();
    /*setPage(1);
		setHasMoreData(true);
		getPostList();*/
  };
  return (
    <StyledHeader>
      <Link to={"/"} className="nav-logo-link">
        <img
          alt="logo"
          src="images/The Imaginarium (2).png"
          onClick={() => setActiveMenu(0)}
        />
      </Link>
      <NavManu isToggleOpen={isToggleOpen}>
        <li>
          <Link to="/info">
            <Btn
              btnText="서비스 소개"
              color={
                activeMenu !== 1 ? theme.color.white : theme.color.gra_blue
              }
              width="8rem"
              onClick={() => handleMenuClick(1)}
            />
          </Link>
        </li>
        <li>
          <Link to="/list">
            <Btn
              btnText="전시 둘러보기"
              color={
                activeMenu !== 2 ? theme.color.white : theme.color.gra_blue
              }
              width="8rem"
              onClick={() => handleMenuClick(2)}
            />
          </Link>
        </li>
        <li>
          <Link to="/request">
            <Btn
              btnText="전시 의뢰하기"
              color={
                activeMenu !== 3 ? theme.color.white : theme.color.gra_blue
              }
              width="8rem"
              onClick={() => handleMenuClick(3)}
            />
          </Link>
        </li>
        <li>
          <Link to="/center">
            <Btn
              btnText="고객 센터"
              color={
                activeMenu !== 4 ? theme.color.white : theme.color.gra_blue
              }
              width="8rem"
              onClick={() => handleMenuClick(4)}
            />
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
              <Btn
                btnText="my page"
                color={
                  activeMenu !== 5 ? theme.color.white : theme.color.gra_blue
                }
                width="8rem"
                onClick={() => handleMenuClick(5)}
              />
            </Link>
          ) : (
            <div>
              <Link to="/login">
                <Btn
                  btnText="login"
                  color={
                    activeMenu !== 6 ? theme.color.white : theme.color.gra_blue
                  }
                  width="8rem"
                  onClick={() => handleMenuClick(6)}
                />
              </Link>
              <Link to="/signup">
                <Btn
                  btnText="signup"
                  color={
                    activeMenu !== 7 ? theme.color.white : theme.color.gra_blue
                  }
                  width="8rem"
                  onClick={() => handleMenuClick(7)}
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
  );
};

const StyledHeader = styled.header`
  width: 100%;
  opacity: 0.85;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 1.3rem;
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
    height: 8rem;
    /*:hover {
      transform: rotateY(180deg);
    }*/
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
