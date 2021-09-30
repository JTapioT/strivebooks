import React from "react";
import Button from "react-bootstrap/Button";


class BookComment extends React.Component {

  state = {
    isDeleted: false
  }

  // Spice it up with some slice..
  // slice from first character until "@" character

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
    
      return (
      this.state.isDeleted === true ? null : 
      <div className="d-flex flex-column py-3 text-monospace" key={this.props.comment.elementId} style={{borderTop: "1px solid #ccc"}}>
        <blockquote className="blockquote">
          <p className="m-0">{this.props.comment.comment}</p>
          <footer className="blockquote-footer"><cite title="Source Title">{this. props.comment.author.slice(0, this.props.comment.author.indexOf("@"))}</ cite></footer>
        </blockquote>
        <div className="d-flex align-items-center justify-content-between mt-4">
        <Button variant="danger" onClick={() => {this.deleteComment()}}>Delete  Comment</Button>
        <p className="badge badge-success m-0" style={{fontSize: "1.5rem"}}>{this.  props.comment.rate}</p>
        </div>
      </div>
    )
    

  }
}

export default BookComment;