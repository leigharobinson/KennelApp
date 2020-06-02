import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h4>
          Owner: <span className="card-Ownername">{props.owner.name}</span>
        </h4>
        <p> Number: {props.owner.phoneNumber} </p>
      </div>
    </div>
  );
};

export default OwnerCard;
