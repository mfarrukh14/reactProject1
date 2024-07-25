import ComponentD from "./ComponentD.jsx";
import React, {useContext} from 'react';
import { userContext } from './ComponentA.jsx';

export default function ComponentC()
{

    const user = useContext(userContext);

    return(
        <div className='box'>
            <h1>ComponentC</h1>
            <p>Bye {user}</p>
            <ComponentD />
        </div>
    );

}