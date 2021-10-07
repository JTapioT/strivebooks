import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import {Link, withRouter} from 'react-router-dom'
/* import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'; */
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

function AppNavigation() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
    <Container>
    <Link to="/">
    <Navbar.Brand> <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nuvola_apps_bookcase.svg/1024px-Nuvola_apps_bookcase.svg.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Book Store</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="w-100">
        <div className="d-flex align-items-center">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/" className="mr-4">About</Link>
        <Link to="/" className="mr-4">Browse</Link>
        </div>
        <div className="d-flex align-items-center ml-auto">
        <Link to="/register" className="mr-4"><Button className="btn btn-secondary">Register</Button></Link>
        <Nav.Link>Login</Nav.Link>
        </div>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    {/*  <Form className="d-flex ml-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary" className="ml-1">Search</Button>
      </Form> */}
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default withRouter(AppNavigation);