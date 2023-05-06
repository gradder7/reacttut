import React, { useState, useEffect } from "react";
import "../css/ReactForm.css";

// problem statement:
// create a react form
// perfom validation for input fields
//store data in array
//show the details of recent user and add in ui
// show pop up on sucessfull submission
// show pop if data already present in array and not add that data.

function ReactForm() {
  // states
  // manage input in object
  const [inputs, setInputs] = useState({});
  //   check is submitted or not
  const [submit, setsubmit] = useState(false);
  //   check is data we are entering aready in array or not
  const [isPresntData, setIsPresentData] = useState(false);
  //   set the error for validation
  const [errors, setErrors] = useState({});
  //   satete to store the input in array
  const [details, setDetails] = useState([]);

  //   handle the input in inputfields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    let obj = { ...inputs };
    setIsPresentData(false);
    setsubmit(true);
    checkDataArray(obj);
    setInputs({});
    setErrors(validate(inputs));
  };

  //   function to validate the data for handelling error
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required !";
    }
    if (!values.position) {
      errors.position = "Position is required !";
    }
    if (!values.age) {
      errors.age = "age is required !";
    } else if (parseInt(values.age) < 3) {
      errors.age = "age must be greater !";
    }

    return errors;
  };

  // function to check is data already in array or not
  // if yes than show error if not than add it
  const checkDataArray = (values) => {
    for (let user of details) {
      // check data
      if (user.name === values.name) {
        setsubmit(false);
        setIsPresentData(true);
        return;
      }
    }

    // check input should not empty to add in details[]
    // Object.keys(inputs) it will return the keys of object in arrays form
    if (
      Object.keys(inputs).length > 0 &&
      inputs.name !== undefined &&
      inputs.position !== undefined &&
      inputs.age !== undefined
    ) {
      setDetails([...details, values]);
    }
  };

  return (
    <>
      <div className="container">
        {/* check is data submitted sucessfully than show sucessfully */}
        {Object.keys(errors).length === 0 && submit && (
          <div className="popUp">
            <p>Signed in sucessfully</p>{" "}
          </div>
        )}{" "}
        {/* check is data already there than show error */}
        {isPresntData && (
          <div className="popUp">
            <p className="error">Data already present!</p>{" "}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <h1>User Details</h1>
          <label>
            Enter your name:
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </label>
          <p className="error">{errors.name}</p>

          <label>
            Enter your Position:
            <input
              type="text"
              name="position"
              value={inputs.position || ""}
              onChange={handleChange}
            />
          </label>
          <p className="error">{errors.position}</p>

          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <p className="error">{errors.age}</p>
          <input type="submit" />
        </form>
        <div>
          {/* show the submitted data */}
          {Object.keys(errors).length === 0 && submit && (
            <div>
              <p>Details of Registerd User</p>
              <p>Name:{details[details.length - 1].name}</p>
              <p>Position:{details[details.length - 1].position}</p>
              <p>age:{details[details.length - 1].age}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ReactForm;
