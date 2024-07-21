import React, {useState} from 'react';

export default function MyComponent()
{

    const [name,setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleQuantityChange = (e) =>{
        setQuantity(e.target.value);
    }

    function handleCommentChange(event)
    {
        setComment(event.target.value);
    }

    return(
        <div>
            <input value={name} type="text" onChange={(e) => handleNameChange(e)} />
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={(e) => handleQuantityChange(e)} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Leave delivery instructions'></textarea>
            <p>Comment: {comment}</p>
        </div>
    );
}