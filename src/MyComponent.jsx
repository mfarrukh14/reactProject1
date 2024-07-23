import React, {useState} from "react";

export default function MyComponent()
{
    const[cars, setCars] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear());
    const[carMake, setCarMake] = useState("");
    const[carModel, setCarModel] = useState("");

    function handleAddCar()
    {
        const carItem = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c,carItem])
    }

    function handleRemoveCar(index)
    {
        setCars(c=>c.filter((_,i)=>i!==index));
    }

    function handleCarYearChange(event)
    {
        setCarYear(event.target.value);
    }

    function handleCarMakeChange(event)
    {
        setCarMake(event.target.value);
    }

    function handleCarModelChange(event)
    {
        setCarModel(event.target.value);
    }


    return(
        <div>
            <h1>Selected Cars: </h1>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={()=>{handleRemoveCar(index)}}>{carYear} {carMake} {carModel}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleCarYearChange} /><br />
            <input type="text" placeholder="Car Make" value={carMake} onChange={handleCarMakeChange} /><br />
            <input type="text" placeholder="Car Model" value={carModel} onChange={handleCarModelChange}/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );

}