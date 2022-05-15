import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form className="grid gap-2 w-80">
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        className="mx-2 p-2 rounded-md"
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        className="mx-2 p-2 rounded-md"
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Please enter your email"
        className="mx-2 p-2 rounded-md"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        onChange={handleChange}
        name="comments"
        className="mx-2 p-2 rounded-md"
        value={formData.comments}
      >
        Hello this is a textarea
      </textarea>
    </form>
  );
}

export default Form;
