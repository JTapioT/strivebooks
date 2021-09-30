import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookCommentForm extends React.Component {

  state = {
    email: '',
    rating: 1,
    comment: ''
  }

  async handleCommentSubmit (event) {
    event.preventDefault();
    
    console.log(this.state);
  }


  render () {
    return (
      <>
        <h6 style={{ paddingTop: "1rem", borderTop: "2px solid #ccc" }}>
          Add your comment
        </h6>
        <Form onSubmit={(event) => {this.handleCommentSubmit(event)}} className="mt-3">
          <Form.Group controlId="exampleForm.ControlInput1" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={this.state.email}
              onChange={(event) => {
                this.setState({
                  email: event.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate the book</Form.Label>
            <Form.Control as="select" onChange={(event) => {
              this.setState({
                email: this.state.email,
                rating: event.target.value,
                comment: this.state.comment
              })
            }}
            value={this.state.rating}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your comment</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(event) => {
              this.setState({
                email: this.state.email,
                rating: this.state.rating,
                comment: event.target.value
              })
            }}
            value={this.state.comment}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit comment
          </Button>
        </Form>
      </>
    );
  }
}

export default BookCommentForm;