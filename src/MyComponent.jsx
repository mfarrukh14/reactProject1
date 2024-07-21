import React, {useState} from 'react'

export default function MyComponent()
{
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const updateName = () => {
        setName("Farrukh");
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const decrementAge = () => {
        setAge(age - 1);
    }

    const resetAge = () =>{
        setAge(0);
    }

    const toggleEmployedStatus = () =>{
        setEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>
            <button onClick={resetAge}>Reset Age</button>

            <p>Employee: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>toggle status</button>
        </div>
    );

}