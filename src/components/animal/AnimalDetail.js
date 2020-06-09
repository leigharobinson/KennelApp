import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { firstLetterCase } from "../../modules/helpers";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then((animal) => {
      if (animal.id) {
        setAnimal({
          name: firstLetterCase(animal.name),
          breed: firstLetterCase(animal.breed),
          employee: animal.employeeId,
        });
      } else {
        props.history.push("/noIdinDB");
      }
      // setIsLoading(false);
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
        <p>Assigned Employee: {animal.employeeId}</p>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;
