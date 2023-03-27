import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import styled from "styled-components";
import theme from "./theme";

export const MainHeader = () => {
  const isLogin = true;

  return (
    <Main>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/" id="logo">
            The Imaginarium
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/info">서비스 소개</Nav.Link>
              <Nav.Link href="/customer">고객 센터</Nav.Link>
              <NavDropdown title="전시 둘러보기" id="basic-nav-dropdown">
                <NavDropdown.Item href="/list/public">
                  전체 공개 전시
                </NavDropdown.Item>
                <NavDropdown.Item href="/list/private">
                  개인 전시
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/request">
                  전시 의뢰하기
                </NavDropdown.Item>
              </NavDropdown>
              {isLogin ? null : (
                <>
                  <Nav.Link href="/login">login </Nav.Link>
                  <Nav.Link href="/signup">signup</Nav.Link>
                </>
              )}
              {isLogin ? <Nav.Link href="/mypage">mypage </Nav.Link> : null}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Main>
  );
};

const Main = styled.div``;
