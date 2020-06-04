import React from "react";
import { Link } from "react-router-dom";
// import PageNotFound from ".a/images/notFound.jpg";

class NotFoundID extends React.Component {
  render() {
    return (
      <div>
        <h1>No ID match</h1>
        {/* <img src={PageNotFound} /> */}
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundID;
