import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Welcome() {
  return (
  <Jumbotron fluid style={{background: "linear-gradient(180deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%)"}}>
    <Container>
    <h1>Welcome.</h1>
    <p className="card-subtitle text-muted">Welcome again to the bookstore.</p>
    </Container>
  </Jumbotron>
  )
}

export default Welcome;