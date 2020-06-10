import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";
const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture> */}
        <h3>
          Location:
          <span className="card-locationName">
            {props.locationVal.location}
          </span>
        </h3>
        <Link to={`/locations/${props.locationVal.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/locations/${props.locationVal.id}/edit`)
          }
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.locationVal.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
