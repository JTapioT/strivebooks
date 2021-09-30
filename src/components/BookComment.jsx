
function BookComment(props) {
  // Spice it up with some slice..
  // slice from first character until "@" character
  const author = props.comment.author.slice(0, props.comment.author.indexOf("@"))

  return (
  <div className="d-flex flex-column py-3 text-monospace" key={props.comment.elementId} style={{borderTop: "1px solid #ccc"}}>
    <blockquote className="blockquote">
      <p className="m-0">{props.comment.comment}</p>
      <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
    </blockquote>
    <div className="d-flex align-items-center ml-auto">
    <p className="badge badge-success m-0" style={{fontSize: "1.5rem"}}>{props.comment.rate}</p>
    </div>
  </div>
  )
}

export default BookComment;