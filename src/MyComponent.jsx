import React, {useState, useEffect} from 'react';

export default function MyComponent()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleWindowChange);
        console.log("EVENT LISTENER ADDED");

        //Clean up after
        return(()=>{
            window.removeEventListener("resize", handleWindowChange);
        });
    }, []);

    useEffect(()=>{
        document.title = `${width} ${height}`;
    },[width,height]);

    function handleWindowChange()
    {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(<>
        <h1>Width: {width}</h1>
        <h1>Height: {height}</h1>
    </>);

}