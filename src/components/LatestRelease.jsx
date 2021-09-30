import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import SingleBook from './SingleBook';
import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

// Book categories
const categories = {
  fantasy,
  history,
  horror,
  romance,
  scifi
}


class LatestRelease extends React.Component {

  state = {
    category: "Fantasy"
  }

  render() {
    // Note to myself:
    // Prop 'category' value comes in string form.
    // Hence, in order to use component dynamically, insert imported .json files to object
    // Access the object with bracket notation in order to use the correct list to loop through.
    //const category = this.props.category;
    return (
      <Container className="mt-5">
        <Form.Group controlId="exampleForm.ControlSelect1" style={{width: "30%"}}>
          <Form.Label>Select Category</Form.Label>
          <Form.Control as="select" onChange={(event) => {this.setState({category: event.target.value})}}>
            <option>Fantasy</option>
            <option>History</option>
            <option>Scifi</option>
            <option>Horror</option>
            <option>Romance</option>
          </Form.Control>
        </Form.Group>
        <h3 style={{ textTransform: "capitalize" }}>{this.state.category}</h3>
        <Row>{
        this.state.category &&
        categories[this.state.category.toLowerCase()].map((book) => {
          return <SingleBook key={book.asin} book={book}/>
        }
        )}</Row>
      </Container>
    );
  }
}

export default LatestRelease;