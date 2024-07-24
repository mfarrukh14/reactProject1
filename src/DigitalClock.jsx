import React, {useState, useEffect} from 'react';

export default function DigitalClock()
{

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return(()=>{
            clearInterval(intervalID);
        });
    }, []);

    function displayTime()
    {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours%12 || 12;

        return `${zeroPadding(hours)}:${zeroPadding(minutes)}:${zeroPadding(seconds)} ${meridiem}`;
    }

    function zeroPadding(number)
    {
        return(number < 10 ? "0" : "") + number;
    }

    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{displayTime()}</span>
            </div>
        </div>
    );
}