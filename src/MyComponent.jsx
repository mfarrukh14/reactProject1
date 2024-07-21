import React, {useState} from 'react';

export default function MyComponent()
{

    const [name,setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

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

    function handlePayment(event)
    {
        setPayment(event.target.value);
    }

    function handleShpping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} type="text" onChange={(e) => handleNameChange(e)} />
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={(e) => handleQuantityChange(e)} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Leave delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <h3>Payment Method</h3>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>

            <p>Payment: {payment}</p>

            <h3>Shipping Method:</h3>

            <label>
                <input type="radio" value="PickUp" checked = {shipping === "PickUp"} onChange={handleShpping} />
                PickUp
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={handleShpping}/>
                Delivery
            </label>

            <p>shipping: {shipping}</p>

        </div>
    );
}