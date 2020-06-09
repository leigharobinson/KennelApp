import React from "react";
import "./Employee.css";
const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h4>
          Employee:
          <span className="card-ownername"> {props.employee.name} </span>
        </h4>
        <p> ID: {props.employee.employeeIdx} </p>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/employees/${props.employee.id}/details`);
          }}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/employees/${props.employee.id}/edit`)
          }
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => props.deleteEmployee(props.employee.id)}
        >
          Fire
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
