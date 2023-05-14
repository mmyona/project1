import React from "react";
import styled from "styled-components";
import theme from "../components/theme";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export const CenterMenu = () => {
  return (
    <CenterContainer>
      <Nav fill variant="tabs" defaultActiveKey="/center">
        <StyledNavItem>
          <StyledNavLink to="/qa" activeClassName="active">
            Q&A
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/request" activeClassName="active">
            전시 의뢰
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/bugs" activeClassName="active">
            버그 제보
          </StyledNavLink>
        </StyledNavItem>
      </Nav>
    </CenterContainer>
  );
};

const CenterContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1px solid white;

  width: 100%;
  max-width: 960px; /* Nav 컴포넌트의 최대 너비 */
  margin: 50px auto 0; /* 헤더의 높이를 고려하여 margin-top을 조정합니다. */
`;

const StyledNavItem = styled(Nav.Item)`
  &&&.active {
    color: ${theme.color.gra_blue};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  padding: 0.75rem 1rem;
  text-decoration: none;

  &:hover {
    color: ${theme.color.gra_blue};
    text-decoration: none;
  }
`;
