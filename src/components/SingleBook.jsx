import Card from "react-bootstrap/Card";
import React from "react";
import BookComment from "./BookComment";
import BookCommentForm from "./BookCommentForm";
// Where to actually store this?
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k";


class SingleBook extends React.Component {
  state = {
    id: this.props.book.asin,
    title: this.props.book.title,
    selected: false,
    comments: [],
  }

  async fetchById() {
    try {
      let response = await (fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state.id}`, {
        method: "GET",
        headers: {
          "Authorization": apiKey,
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
        style={{ padding: "0.5rem" }}
        onClick = {() => {
          this.setState({
            id: this.state.id,
            title: this.state.title,
            selected: true, /* this.state.selected === true ? false : true */
          })
          this.fetchById();
        }}
      >
        <Card>
          <Card.Img
            className="img-fluid"
            src={this.props.book.img}
            style={{ height: "300px", Maxwidth: "100%" }}
          />
          <Card.Body className="bg-light" style={{ minHeight: "120px", maxHeight:"auto"}}>
            <h6>{this.state.title}</h6>
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
              <BookCommentForm/>
            }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;

