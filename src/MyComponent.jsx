import React, {useState, useEffect} from 'react';

export default function MyComponent()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `count: ${count}`
    }, [count])

    function handleAdd()
    {
        setCount(c => c+1);
    }

    return(
        <>
                <p>Count: {count}</p>
                <button onClick={handleAdd}>Add</button>
        </>
    );

}