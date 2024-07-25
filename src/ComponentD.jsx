import React, {useContext} from 'react';
import { userContext } from './ComponentA.jsx';

export default function ComponentD()
{
    const user = useContext(userContext);

    return(
        <div className='box'>
            <h1>ComponentD</h1>
            <p>Bye {user}</p>
        </div>
    );

}