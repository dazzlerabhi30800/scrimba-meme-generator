import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="grid w-60 gap-2">
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
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input type="radio" id="employed" name="employment" value="unemployed" checked={formData.employment === "unemployed"} onChange={handleChange} />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input type="radio" id="part-time" name="employment" value="part-time" checked={formData.employment === "part-time"} onChange={handleChange} />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input type="radio" id="full-time" name="employment" value="full-time" checked={formData.employment === "full-time"} onChange={handleChange} />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />
      
      <label htmlFor="favColor">What is your favorite colour?</label>
      <br />
      <select
          name="favColor"
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
       >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yello</option>
          <option value="green">Green</option>
          <option value="indigo">Indigo</option>
          <option value="blue">Blue</option>
      </select>
      <button className="bg-teal-500 p-2 text-white">Submit</button>
    </form>
  );
}


export default Form;
