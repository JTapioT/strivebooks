import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useState, useEffect} from 'react';

function Register() {

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[passwordRepeated, setPasswordRepeated] = useState("");

  const[submitButton, setSubmitButton] = useState(true);

  const[errors, setErrors] = useState({
    firstName: true,
    lastName: true,
    password: true,
    repeatedPassword: true,
  })


  useEffect(() => {

    console.log(errors);

    if(firstName.length < 2) {
      setErrors({
        ...errors,
        firstname: true
      })
    } else {
      setErrors({
        ...errors,
        firstname: false
      })
    }

    if(lastName.length < 3) {
      setErrors({
        ...errors,
        lastname: true
      })
    } else {
      setErrors({
        ...errors,
        lastname: false
      })
    }

    if(password.length < 8) {
      setErrors({
        ...errors,
        password: true
      })
    } else {
      setErrors({
        ...errors,
        password: false
      })
    }

    if(password.length > 7 && password !== passwordRepeated) {
      setErrors({
        ...errors,
        repeatedPassword: false
      })
    } else {
      setErrors({
        ...errors,
        repeatedPassword: true
      })
    }

      for(const error in errors) {
      if(errors[error] === true) {
        setSubmitButton(true);
        return;
      } else {
        setSubmitButton(false);
      }
    }

  }, [firstName, lastName, email, password, passwordRepeated])
  // Name (2 chars), Surname (3 chars), Email (email field), password(8 chars, 1 digit, 1 letter)
  // PasswordConfirm - same value as password
  return (
  
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Form onSubmit={(event) => {event.preventDefault()}} className="mt-5">
        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="Enter first name" value={firstName} onChange={(event) => {setFirstName(event.target.value)}} />
        <Form.Text id="passwordHelpBlock" muted>
          {errors.firstName && 'Your first name must contain at least 2 characters'}
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formGroupLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event) => {setLastName(event.target.value)}}/>
        <Form.Text id="passwordHelpBlock" muted>
          {errors.lastName && 'Your last name must contain at least 3 characters'}
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter your email" value={email} onChange={(event) => {setEmail(event.target.value)}} />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        <Form.Text id="passwordHelpBlock" muted> 
        Your password must be at least 8 characters long, contain 1 letter and 1 numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formGroupPasswordAgain">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Repeat password" value={passwordRepeated} onChange={(event) => {setPasswordRepeated(event.target.value)}} />
          <Form.Text id="passwordHelpBlock" muted> 
          {
            errors.repeatedPassword && 'Passwords do not match each other'
          }
        </Form.Text>
        </Form.Group>
        <Button variant="secondary" type="submit" disabled={submitButton}>
        Submit
      </Button>
      </Form>
    </Row>
  </Container>
  )
}
export default Register;