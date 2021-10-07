import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormControl } from 'react-bootstrap';
import { useEffect } from 'react';

const validationSchema = yup.object().shape({
  firstName: yup.string().min(2, "Too short first name").required("First name is required"),
  lastName: yup.string().min(3, "Too short last name").required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Too short password").required("Password is required"),
  repeatedPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match!").required("Type in your password again"),
})

function Register() {

const {values, handleChange, handleSubmit, errors, touched, isValid, isValidating, status} = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatedPassword: '',
  }, 
  onSubmit: (values) => {alert(JSON.stringify(values))},
  validationSchema: validationSchema
})

/*   const[firstName, setFirstName] = useState("");
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
  }) */

  // Name (2 chars), Surname (3 chars), Email (email field), password(8 chars, 1 digit, 1 letter)
  // PasswordConfirm - same value as password


  return (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={8}>
      <Form onSubmit={handleSubmit} className="mt-5">

        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control isInvalid={errors.firstName} placeholder="Enter your first name" value={values.firstName} name="firstName" onChange={handleChange} />
        <FormControl.Feedback type={errors.firstName ? "invalid" : "valid"}>{errors.firstName}</FormControl.Feedback>
        </Form.Group>

        <Form.Group controlId="formGroupLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control isInvalid={errors.lastName} placeholder="Enter last name" value={values.lastName} name="lastName" onChange={handleChange}/>
        <FormControl.Feedback type={errors.lastName ? "invalid" : "valid"}>{errors.lastName}</FormControl.Feedback>
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control isInvalid={errors.email} placeholder="Enter your email" value={values.email} name="email" onChange={handleChange}/>
          <FormControl.Feedback type={errors.email ? "invalid" : "valid"}>{errors.email}</FormControl.Feedback>
        </Form.Group>


        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control isInvalid={errors.password} placeholder="Password" value={values.password} name="password" onChange={handleChange}/>
        <FormControl.Feedback type={errors.password ? "invalid" : "valid"}>{errors.password}</FormControl.Feedback>
        </Form.Group>


        <Form.Group controlId="formGroupRepeatPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control isInvalid={errors.repeatedPassword} placeholder="Repeat password" value={values.repeatedPassword} name="repeatedPassword" onChange={handleChange}/>
        <FormControl.Feedback type={errors.repeatedPassword ? "invalid" : "valid"}>{errors.repeatedPassword}</FormControl.Feedback>
        </Form.Group>

        <Button variant="secondary" type="submit" disabled={isValid ? false : true}>
          Submit
        </Button>
      </Form>
      </Col>
    </Row>
  </Container>
  )
}
export default Register;