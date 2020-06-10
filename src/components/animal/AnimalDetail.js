import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { firstLetterCase } from "../../modules/helpers";
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    employeeName: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then((animal) => {
      if (animal.id) {
        //so cool that I can get employee's id to match with forien key employeeId
        EmployeeManager.get(animal.employeeId).then((employee) => {
          //Look I have access to both Employees and Animals now, Woot!
          setAnimal({
            name: firstLetterCase(animal.name),
            breed: firstLetterCase(animal.breed),
            employeeName: employee.name,
          });
        });
      } else {
        props.history.push("/noIdinDB");
      }
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <p>Assigned Employee: {animal.employeeName}</p>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;
