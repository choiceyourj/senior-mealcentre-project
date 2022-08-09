import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const MainNavigation = () => {
  return (
    <header>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">경기도 어르신급식소</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">소개</Nav.Link>
          <Nav.Link href="/">무료급식소</Nav.Link>
          <Nav.Link href="/search">지도에서 찾아보기</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  );
};

export default MainNavigation;


