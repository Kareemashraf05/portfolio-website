import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import instagram from '../assets/img/instagram.jpg';
import facebook from '../assets/img/facebook.png';
import youtube from '../assets/img/youtube.png';

function CompNavbar() {
  return (
    
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-white">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ms-auto align-items-center">
    <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
    <Nav.Link href="#skills" className="navbar-link">Skills</Nav.Link>
    <Nav.Link href="#projects" className="navbar-link">Projects</Nav.Link>
  </Nav>
  <span className="navbar-text">
    <div className="social-icon">
      <a href="#"><img src={instagram} alt="" /></a>
      <a href="#"><img src={facebook} alt="" /></a>
      <a href="#"><img src={youtube} alt="" /></a>
    </div>
    <button className="vvd" onClick={() => console.log('connect')}>
      <span>Let's Connect</span>
    </button>
  </span>
</Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CompNavbar;