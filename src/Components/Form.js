import React,{useState} from 'react';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    console.log(firstName);

    return(
        <form className='grid gap-2 w-60'>
            <input
                type="text"
                placeholder='First Name'
                onChange={handleFirstNameChange}
                className="mx-2 px-2"
             />
             <input
                type="text"
                placeholder='Last Name'
                onChange={handleLastNameChange}
                className="mx-2 px-2"
             />
        </form>
    )
}

export default Form;