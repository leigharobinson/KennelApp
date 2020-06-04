import React from "react";
import { Link } from "react-router-dom";
import pugError404 from "./images/pugError404.jpg";

class NotFoundID extends React.Component {
  render() {
    return (
      <div>
        <h1>No ID match</h1>
        <img src={pugError404} />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundID;
