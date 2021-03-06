import React, { useState, useEffect } from "react";
//import the components we will need
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";
import { firstLetterCase } from "../../modules/helpers";

const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then((animalsFromAPI) => {
      setAnimals(animalsFromAPI);
    });
  };
  //Here is the delet function
  const deleteAnimal = (id) => {
    AnimalManager.delete(id).then(() =>
      AnimalManager.getAll().then(setAnimals)
    );
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards

  return (
    <>
      {/* //add this button above your display of animal cards */}
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
            console.log("you clicked me");
          }}
        >
          Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map(
          (animal) => (
            //Here is where i could target animal.name and make it uppercase
            (animal.name = firstLetterCase(animal.name)),
            (animal.breed = firstLetterCase(animal.breed)),
            (
              <AnimalCard
                key={animal.id}
                animal={animal}
                deleteAnimal={deleteAnimal}
                {...props}
              />
            )
          )
        )}
      </div>
    </>
  );
};
export default AnimalList;
