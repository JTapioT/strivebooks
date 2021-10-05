import AppNavigation from "./components/AppNavigation";
import Welcome from "./components/Welcome";
/* import LatestRelease from "./components/LatestRelease"; */
import MyFooter from "./components/MyFooter";
import React from "react";
import BookGridBooks from "./components/BookGridBooks";

class App extends React.Component {

  state = {
    category: "fantasy"
  }

  render() {
    return (
      <> 
      <AppNavigation/>
      <Welcome/>
      <BookGridBooks/>
     {/*  <LatestRelease category={this.props.category}/> */}
      <MyFooter/>
      </>
    );
  }
}

export default App;
