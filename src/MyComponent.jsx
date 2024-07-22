import React, {useState} from 'react';

export default function MyComponent()
{
    const [foods, setFoods] = useState(["Apple","Banana","Orange"]);

    function handleAddFood()
    {
        const foodItem = document.getElementById("foodName").value;
        document.getElementById("foodName").value = "";

        setFoods(f => [...f,foodItem]);
    }

    function handleRemoveFood(index)
    {
        setFoods(foods.filter((_, i)=>i!==index));
    }

    return(
        <div>
            <h1>Your Food items: </h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id='foodName' placeholder='Enter your food here' />
            <button onClick={handleAddFood}>Add Item</button>
        </div>
    );
}