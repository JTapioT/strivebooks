import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function BookCommentForm(props) {
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [body, setBody] = useState({
    elementId: props.bookId,
    author: "",
    rate: 1,
    comment: "",
  });

  async function handleCommentSubmit(event) {
    event.preventDefault();

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k",
          },
        }
      );

      if (response.ok) {
        setCommentSubmitted(true);
        setBody({
          elementId: props.bookId,
          author: "",
          rate: 1,
          comment: "",
        });
        /*   this.setState({
          commentSubmitted: true,
          body: {
            elementId: this.props.bookId,
            author: '',
            rate: 1,
            comment: ''
          }
        }) */
      }
    } catch (error) {
      console.log(error);
    }
  }

  return commentSubmitted ? (
    <Alert variant={"success"}>Comment submitted successfully!</Alert>
  ) : (
    <>
      <h6 style={{ paddingTop: "1rem", borderTop: "2px solid #ccc" }}>
        Add your comment
      </h6>
      <Form
        onSubmit={(event) => {
          handleCommentSubmit(event);
        }}
        className="mt-3"
      >
        {/*  <Form.Group controlId="exampleForm.ControlInput1" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={this.state.body.author}
              onChange={(event) => {
                this.setState({
                  body: {
                    ...this.state.body,
                    author: event.target.value
                  }
                });
              }}
            />
          </Form.Group> */}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rate the book</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => {
              setBody({
                ...body,
                rate: event.target.value,
              });
              /*  this.setState({
                body: {
                  ...this.state.body,
                  rate: event.target.value
                }
              }) */
            }}
            value={body.rate}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(event) => {
              setBody({
                ...body,
                comment: event.target.value,
              });
              /*  this.setState({
                body: {
                  ...this.state.body,
                  comment: event.target.value
                }
              }) */
            }}
            value={body.comment}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit comment
        </Button>
      </Form>
    </>
  );
}
/* class BookCommentForm extends React.Component {

  state = {
    commentSubmitted: false,
    body: {
      elementId: this.props.bookId,
      author: '',
      rate: 1,
      comment: ''
    }
  }

  async handleCommentSubmit (event) {
    event.preventDefault();

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.body),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k"
        },
      })

      if(response.ok) {
        this.setState({
          commentSubmitted: true,
          body: {
            elementId: this.props.bookId,
            author: '',
            rate: 1,
            comment: ''
          }
        })

      }
    } catch(error) {
      console.log(error);
    }
    
    console.log(this.state);
  }


  render () {
    return (
      this.state.commentSubmitted ? 
      <Alert variant={"success"}>Comment submitted successfully!</Alert> :
      <>
        <h6 style={{ paddingTop: "1rem", borderTop: "2px solid #ccc" }}>
          Add your comment
        </h6>
        <Form onSubmit={(event) => {this.handleCommentSubmit(event)}} className="mt-3">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate the book</Form.Label>
            <Form.Control as="select" onChange={(event) => {
              this.setState({
                body: {
                  ...this.state.body,
                  rate: event.target.value
                }
              })
            }}
            value={this.state.body.rate}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your comment</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(event) => {
              this.setState({
                body: {
                  ...this.state.body,
                  comment: event.target.value
                }
              })
            }}
            value={this.state.body.comment}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit comment
          </Button>
        </Form>
      </>
    );
  }
} */

export default BookCommentForm;
