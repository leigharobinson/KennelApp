import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerForm = (props) => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  const constructNewOwner = (evt) => {
    evt.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      OwnerManager.post(owner).then(() => props.history.push("/owners"));
    }
  };

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
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="Phone number"
            />
            <label htmlFor="Phone number">Phone number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
