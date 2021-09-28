import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Welcome() {
  return (
  <Jumbotron fluid>
    <Container>
    <h1>Welcome</h1>
    <p className="card-subtitle text-muted">Welcome again to the bookstore.</p>
    </Container>
  </Jumbotron>
  )
}

export default Welcome;