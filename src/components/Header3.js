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
  const handleMenuClick = () => {
    setIsToggleOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <StyledHeader>
      <Link to={"/"} className="nav-logo-link">
        <img alt="logo" src="/images/The Imaginarium (2).png" />
      </Link>
      <NavManu isToggleOpen={isToggleOpen}>
        <li>
          <Link to="/info" onClick={handleMenuClick}>
            <Btn
              btnText="서비스 소개"
              width="8rem"
              activeClassName="active"
              fontWeight="600"
            />
          </Link>
        </li>
        <li>
          <Link to="/publist" onClick={handleMenuClick}>
            <Btn
              btnText="public 전시"
              width="8rem"
              activeClassName="active"
              fontWeight="600"
            />
          </Link>
        </li>
        <li>
          <Link to="/privlist" onClick={handleMenuClick}>
            <Btn
              btnText="private 전시"
              width="8rem"
              activeClassName="active"
              fontWeight="600"
            />
          </Link>
        </li>
        <li>
          <Link to="/center" onClick={handleMenuClick}>
            <Btn
              btnText="고객 센터"
              width="8rem"
              activeClassName="active"
              fontWeight="600"
            />
          </Link>
        </li>
        <div className="searchInput" onClick={handleMenuClick}>
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSearch(e);
            }}
          />
        </div>
        <li>
          <Link to="/login" onClick={handleMenuClick}>
            <Btn
              btnText="login"
              width="6rem"
              activeClassName="active"
              fontWeight="600"
            />
          </Link>
        </li>
        <li>
          <Link to="/mypage" onClick={handleMenuClick}>
            <Btn
              btnText="my page"
              width="8rem"
              activeClassName="active"
              fontWeight="600"
            />
          </Link>
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
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1445px) {
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

  @media screen and (max-width: 1445px) {
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
