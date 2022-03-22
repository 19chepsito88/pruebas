import React, { useEffect, useState } from 'react'


const Timer = ({date,diffSeconds,getRemaining}) => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const { hours, mins, secs } = getRemaining(timeElapsed);
    console.log('tiempo',hours)
    useEffect(() => {
        const interval = setInterval(() => {
            const _date = diffSeconds(new Date(date), new Date());
            setTimeElapsed(_date)
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <span className='text-timer' style={{ color: '#DB4D4D', fontFamily: 'Roboto-Medium',}}>{`${hours}:${mins}:${secs}`}</span>
    );
}

export default Timer
