import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const MainHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">The Imaginarium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link href="/login">login </Nav.Link>
        <Nav.Link href="/signup">signup</Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
              <NavDropdown.Item href="/request">전시 의뢰하기</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
