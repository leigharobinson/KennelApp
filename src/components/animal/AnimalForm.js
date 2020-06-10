import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalForm.css";

const AnimalForm = (props) => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    employeeId: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewAnimal = (evt) => {
    evt.preventDefault();
    if (!animal.name || !animal.breed || !Number(animal.employeeId)) {
      window.alert("Please input an animal name and breed and Employee");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      const newAnimal = { ...animal };
      newAnimal.employeeId = parseInt(newAnimal.employeeId);
      AnimalManager.post(newAnimal).then(() => props.history.push("/animals"));
    }
  };
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return EmployeeManager.getAll().then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };
  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <select
              className="form-control"
              id="employeeId"
              value={Number(animal.employeeId)}
              onChange={handleFieldChange}
            >
              <option>Select Caretaker</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
            <label htmlFor="employeeId"> Employee </label>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm;
