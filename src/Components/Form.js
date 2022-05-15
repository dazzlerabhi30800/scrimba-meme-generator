import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  return (
    <form className="gap-2">
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        className="m-2 p-2 rounded-md"
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        className="m-2 p-2 rounded-md"
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Please enter your email"
        className="m-2 p-2 rounded-md"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        onChange={handleChange}
        name="comments"
        className="mx- p-2 rounded-md"
        value={formData.comments}
      >
        Hello this is a textarea
      </textarea>
      <input
        type="checkbox"
        id="isFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
        className="mx-2"
        name="isFriendly"
       />
       <label htmlFor="isFriendly">Are you Friendly ?</label>
       <br />
    </form>
  );
}

export default Form;
