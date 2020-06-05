import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h4>
          Owner: <span className="card-Ownername">{props.owner.name}</span>
        </h4>
        <p> Number: {props.owner.phoneNumber} </p>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
