import React, { useEffect, useState } from 'react'

const Cronometro = ({date,covert,calculateSeconds}) => {
    const [timeSeconds, setTimeSeconds] = useState(0);
    const {hour,minute,second}=covert(timeSeconds);

    useEffect(() => {
        const interval=setInterval(() => {
            const _date=calculateSeconds(new Date(date))
            setTimeSeconds(_date)
        }, 1000);
        return ()=>clearInterval(interval);
    }, [])

    return (
        <div>
            {hour+':'+minute+':'+second}
        </div>
    )
}

export default Cronometro
