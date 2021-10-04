import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import BookGridComment from "./BookGridComment";
import BookCommentForm from './BookCommentForm';

// Book categories
const categories = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

class BookGridBooks extends React.Component {
  state = {
    category: "Fantasy",
    isCategoryChanged: false,
    selectedBookID: null,
    comments: []
  };

  async fetchComments() {
    try {
      let response = await (fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state.selectedBookID}`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k",
        }
      }))

      if(response.ok) {
        let bookComments = await response.json();
        console.log(bookComments);
        this.setState({
          ...this.state,
          isCategoryChanged: false,
          comments: bookComments
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedBookID !== this.state.selectedBookID) {
      this.fetchComments()
      console.log(this.state);
    }

    if(prevState.category !== this.state.category) {
      this.setState({
        ...this.state,
        isCategoryChanged: true
      })
    }
  }


  render() {
    return (
      <Container className="mt-5">
        <Form.Group
          controlId="exampleForm.ControlSelect1"
          style={{ width: "30%" }}
        >
          <Form.Label>Select Category</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => {
              this.setState({ category: event.target.value });
            }}
          >
            <option>Fantasy</option>
            <option>History</option>
            <option>Scifi</option>
            <option>Horror</option>
            <option>Romance</option>
          </Form.Control>
        </Form.Group>
        <h3 style={{ textTransform: "capitalize" }}>{this.state.category}</h3>
        <Row>
          <Col md={9}>
            <Row>
              {this.state.category &&
                categories[this.state.category.toLowerCase()].map((book) => {
                  return (
                    <div
                      className="col-4"
                      style={{ padding: "0.5rem" }}
                      key={book.asin}
                      onClick={() => {
                        this.setState({
                          ...this.state,
                          selectedBookID: book.asin
                        })
                      }}
                    >
                      <Card>
                        <Card.Img
                          className="img-fluid"
                          src={book.img}
                          style={{
                            height: "300px",
                            Maxwidth: "100%",
                            cursor: "pointer",
                          }}
                        />
                        <Card.Body
                          className="bg-light"
                          style={{ minHeight: "120px", maxHeight: "auto" }}
                        >
                          <h6>{book.title}</h6>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </Row>
          </Col>
          <Col md={3}>
            {
              this.state.comments.length > 0 && !this.state.isCategoryChanged &&
              this.state.comments.map((comment) => {
                return(
                  <BookGridComment key={comment._id} comment={comment}/>
                )
              })
            }
            {
              this.state.selectedBookID !== null && !this.state.isCategoryChanged &&
              <BookCommentForm bookId={this.state.selectedBookID}/>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookGridBooks;
