import { React, useState } from "react";
import Button from "react-bootstrap/Button";

function BookGridComment(props) {
  const [isDeleted, setCommentDeleted] = useState(false);

  async function deleteComment() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.comment._id}`,
        {
          method: "DELETE",
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k",
          },
        }
      );

      if (response.ok) {
        setCommentDeleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return isDeleted ? null : (
    <div
      className="d-flex justify-content-between align-items-end text-monospace py-3"
      key={props.comment.elementId}
      style={{ borderBottom: "1px solid #ccc" }}
    >
      <div className="d-flex flex-column">
        <blockquote className="blockquote">
          <p className="m-0">{props.comment.comment}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">
              {props.comment.author.slice(0, props.comment.author.indexOf("@"))}
            </cite>
          </footer>
        </blockquote>
        <Button
          variant="danger"
          onClick={() => {
            deleteComment();
          }}
        >
          Delete Comment
        </Button>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <p className="badge badge-success m-0" style={{ fontSize: "2rem" }}>
          {props.comment.rate}
        </p>
      </div>
    </div>
  );
}

/* class BookGridComment extends React.Component {

  state = {
    isDeleted: false,
  }

  async deleteComment() {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.comment._id}`, {
        method: "DELETE",
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1OWUyZGZmNjlkODAwMTU1OWI5YWMiLCJpYXQiOjE2MzMwMDEwMDYsImV4cCI6MTYzNDIxMDYwNn0.PSE3lytW0Er7jsprQrcuXiEjXpmg3SqxkqB1vsu5m6k",
        }
      })

      if(response.ok) {
        console.log(response);
        this.setState({
          isDeleted: true
        })
      }
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return this.state.isDeleted === true ? null : (
      
          <div
          className="d-flex justify-content-between align-items-end py-3 text-monospace"
          key={this.props.comment.elementId}
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <div className="d-flex flex-column">
          <blockquote className="blockquote">
            <p className="m-0">{this.props.comment.comment}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">
                {this.props.comment.author.slice(
                  0,
                  this.props.comment.author.indexOf("@")
                )}
              </cite>
            </footer>
          </blockquote>
            <Button
              variant="danger"
              onClick={() => {
                this.deleteComment();
              }}
            >
              Delete Comment
            </Button>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <p
              className="badge badge-success m-0"
              style={{ fontSize: "2rem" }}
            >
              {this.props.comment.rate}
            </p>
          </div>
        </div>
    )
  }
} */

export default BookGridComment;
