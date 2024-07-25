import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const userContext = createContext();

export default function ComponentA()
{
    const [user, setUser] = useState("Farrukh");


    return(
        <div className='box'>
            <h1>ComponentA</h1>
            <p>Hello from {user}</p>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
        </div>
    );

}