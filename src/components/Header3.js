import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "./theme";

export const MainHeader = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <StyledNavbar expand="lg">
      <StyledLogo as={Link} to={"/"} className="nav-logo-link">
        <img alt="logo" src="/images/The Imaginarium (2).png" />
      </StyledLogo>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggleOpen}
      />
      <StyledNavbarCollapse
        id="basic-navbar-nav"
        className={isToggleOpen ? "show" : ""}
      >
        <StyledNavLink as={Link} to="/info">
          서비스 소개
        </StyledNavLink>
        <StyledNavLink as={Link} to="/publist">
          public 전시
        </StyledNavLink>
        <StyledNavLink as={Link} to="/privlist">
          private 전시
        </StyledNavLink>
        <StyledNavLink as={Link} to="/center">
          고객 센터
        </StyledNavLink>
        <StyledNavLink as={Link} to="/login">
          login
        </StyledNavLink>
        <StyledNavLink as={Link} to="/mypage">
          my page
        </StyledNavLink>
      </StyledNavbarCollapse>
      {isToggleOpen && (
        <StyledFontAwesomeIcon
          icon={faBars}
          className="menuToggleBtn"
          onClick={handleToggleOpen}
          isToggleOpen={isToggleOpen} // 수정: isToggleOpen prop 추가
          aria-controls="basic-navbar-nav"
        />
      )}
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  padding: 0 1.3rem;
  background-color: ${theme.color.navy};
  padding: 0 1.3rem;
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    height: 8rem;
  }
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: max-height 0.3s ease-in-out;

  &.show {
    max-height: 500px; /* 적당한 높이로 설정해주세요 */
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledNavLink = styled(Nav.Link)`
  list-style: none;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 1rem;
`;
