import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    setFormData(prevFormData => {
       return {
            ...prevFormData,
            [event.target.name]: event.target.value
       } 
    })
  } 


  return (
    <form className="grid gap-2 w-60">
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        className="mx-2 px-2 rounded-md py-2"
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        className="mx-2 px-2 rounded-md py-2"
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Please enter your email"
        className="mx-2 px-2 rounded-md py-2"
        name="email"
        onChange={handleChange}
        value={formData.email}
       />
    </form>
  );
}

export default Form;
