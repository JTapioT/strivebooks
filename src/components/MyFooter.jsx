import {withRouter} from "react-router-dom";

function MyFooter() {
  return (
    <footer className="d-flex flex-column align-items-center bg-dark pb-3 mt-5 fixed-bottom">
      <h3 className="text-muted">Footer section</h3>
      <p className="m-0 p-0 text-white">Bookstore - 2021</p>
    </footer>
  )
}

export default withRouter(MyFooter);