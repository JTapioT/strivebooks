import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

// Book categories
const categories = {
  fantasy,
  history,
  horror,
  romance,
  scifi
}



// Card element(s)
function displayBooks(book) {
  return (
    <div key={book.asin} className="col-3" style={{padding: "0.5rem"}}>
    <Card>
      <Card.Img className="img-fluid" variant="top" src={book.img} style={{height: "300px"}}/>
    <Card.Body style={{height: "100px"}}>
      <h6>{book.title}</h6>
    </Card.Body>
    </Card>
    </div>
  )
}


class LatestRelease extends React.Component {
  render() {
    // Note to myself:
    // Prop 'category' value comes in string form.
    // Hence, in order to component dynamically, insert imported .json files to object
    // Access the object with bracket notation in order to use the correct list to loop through.
    const category = this.props.category;
    return (
      <Container className="mt-5">
        <h3>{category.toUpperCase()}</h3>
          <Row>
            {
              categories[category].map(displayBooks)
            }
          </Row>
      </Container>
    )
  }
}

export default LatestRelease;