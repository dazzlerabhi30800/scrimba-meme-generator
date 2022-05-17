import React, {useState} from 'react';
import './SignUpForm.css'

function SignUpForm() {

    const[formData, setFormData] = useState({
        email: "",
        password: "",
        cpassword: "",
        okayToEmail: "",
    })

    
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault();
        if(formData.password === formData.cpassword){
            console.log("Successfully signed up")
        }
        else {
            console.log("Passwords does not match");
            return;
        }

        if(formData.okayToEmail) {
            console.log("Thanks for signing up!");
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="cpassword"
                    onChange={handleChange}
                    value={formData.cpassword}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={handleChange}
                        value={formData.okayToEmail}

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;