import React, { useContext, useEffect, useState } from "react";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./Context/UseContext";

const RegistrationForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const {setShow} = useContext(UserContext)

  const [formErr, setFormErr] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  // console.log(formData);


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);

    let errors = validate(formData);
    setFormErr(errors);
    console.log(errors);

    let errKeyArray = Object.keys(errors);
    // console.log(errKeyArray);


    if (errKeyArray.length == 0) {setFormSubmit(true);
      toast('Yayyyyy !! Form Submitted !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", 
        });}
        else {
          setFormSubmit(false); // Reset formSubmit state
          errKeyArray.forEach((key) => {
            toast.error(errors[key], {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          });
        }
    
  };

  const validate = (data) => {
    let err = {};

    if (data.firstName.trim() == "") {
      err.firstName = "Enter your First Name";
    }
    if (data.lastName.trim() == "") {
      err.lastName = "Enter your Last Name";
    }
    if (data.email.trim() == "") {
      err.email = "Enter your email";
    }
    if (data.phone.trim().length != 10) {
      err.phone = "Enter your 10-Digit Phone No.";
    }
    // console.log(err);
    return err;
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <fieldset>
        <legend>Fill this form</legend>
        <form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
        >
          {formSubmit && (
            <div className="success">
              <p>Registration Successful!</p>
            </div>
          )}

          <label>First Name :</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          {formErr.firstName && <p className="err">Enter your Name</p>}
          <label>Last Name :</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          {formErr.lastName && <p className="err">Enter your Last Name</p>}

          <label>Email :</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          {formErr.email && <p className="err">Enter your Email</p>}

          <label>Phone Number :</label>
          <input
            type="number"
            name="phone"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          {formErr.phone && (
            <p className="err">Enter your 10-Digit Phone No.</p>
          )}

          <input type="submit" value={"Register"} onClick={()=>{
            setShow(true)
          }}/>
        </form>
      </fieldset>
    </div>
  );
};

export default RegistrationForm;
