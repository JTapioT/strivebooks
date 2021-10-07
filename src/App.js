import AppNavigation from "./components/AppNavigation";
import Welcome from "./components/Welcome";
/* import LatestRelease from "./components/LatestRelease"; */
import MyFooter from "./components/MyFooter";
import React from "react";
import BookGridBooks from "./components/BookGridBooks";
import Register from "./components/Register";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {

  state = {
    category: "fantasy"
  }

  render() {
    return (
      <>
      <Router>
      <AppNavigation/>
      <Route path="/" exact component={Welcome}/>
      <Route path="/" exact component={BookGridBooks}/>
      <Route path="/register" exact component={Register}/>
      <MyFooter/>
      </Router>
     {/*  <LatestRelease category={this.props.category}/> */}
      </>
    );
  }
}

export default App;
