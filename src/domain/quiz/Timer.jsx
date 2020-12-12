import React, { useState, useEffect } from 'react';

export default function Timer(props)
{
    let { complete, setComplete } = props;

    const {initialMinute = 10,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
        let myInterval = setInterval(() => {
            if(complete)
            {
                clearInterval(myInterval)
            }
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setComplete(true);
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });

    return complete ? (
        <h3>Out of Time</h3>
    ) : (
        <div>
            { minutes === 0 && seconds === 0
                ? null
                : <h3> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3>
            }
        </div>
    )
}