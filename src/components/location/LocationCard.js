import React from "react";
import "./Location.css";
const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Location:{" "}
          <span className="card-location">{props.location.location}</span>
        </h3>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.location.id)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
