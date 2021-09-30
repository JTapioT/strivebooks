import Card from "react-bootstrap/Card";
import React from "react";
import BookComment from "./BookComment";
import BookCommentForm from "./BookCommentForm";



class SingleBook extends React.Component {
  state = {
    id: this.props.book.asin,
    selected: false,
    comments: [],
  }

  async fetchById() {
    try {
      let response = await (fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state.id}`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k",
        }
      }))

      if(response.ok) {
        let bookComments = await response.json();
        this.setState({
          ...this.state,
          comments: bookComments
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div
        className="col-6 col-md-4 col-lg-3"
        style={{ padding: "0.5rem"}}
      >
        <Card>
          <Card.Img
            className="img-fluid"
            src={this.props.book.img}
            style={{ height: "300px", Maxwidth: "100%", cursor: "pointer"}}
            onClick = {() => {
            this.setState({
              id: this.state.id,
              selected: this.state.selected === true ? false : true
            })
            this.fetchById();
        }}
          />
          <Card.Body className="bg-light" style={{ minHeight: "120px", maxHeight:"auto"}}>
            <h6>{this.props.book.title}</h6>
            { 
              this.state.selected && this.state.comments.length > 0 &&
                this.state.comments.map((comment) => {
                  return (
                    <BookComment key={comment._id} comment={comment}/>
                  )
                } 
              )
            }
            {
              this.state.selected &&
              <BookCommentForm bookId={this.props.book.asin}/>
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;

