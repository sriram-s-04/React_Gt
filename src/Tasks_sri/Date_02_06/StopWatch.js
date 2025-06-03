import {useEffect, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    
    useEffect(() => {
        if(isRunning&&intervalId==null){
            const id = setInterval(() => {
                setTime((Time) => {
                    let { hours, minutes, seconds } = Time;

                    seconds += 1;

                    if (seconds >= 60) {
                        seconds = 0;
                        minutes += 1;
                    }

                    if (minutes >= 60) {
                        minutes = 0;
                        hours += 1;
                    }

                    return { hours, minutes, seconds };
                });
            }, 1000);

            setIntervalId(id);
        }

        return () => clearInterval(intervalId);
}, [isRunning, intervalId]);

    const handleStart = () => {
        console.log("Start");
        if (!isRunning) setIsRunning(true);
    };
    const handleStop = () => {
        console.log("Stop");
        setIsRunning(false);
        clearInterval(intervalId);
        setIntervalId(null);
    };
    const handleReset = () => {
        console.log("Reset");
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        setIsRunning(false);
        clearInterval(intervalId);
        setIntervalId(null);    
    };

  return (
    <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <h1>Stop Watch</h1>
            <div className='stopwatch'>
                <div className='stopwatch__time'>
                    <span className='stopwatch__time--hours'>{String(time.hours).padStart(2, '0')}</span>:
                    <span className='stopwatch__time--minutes'>{String(time.minutes).padStart(2, '0')}</span>:
                    <span className='stopwatch__time--seconds'>{String(time.seconds).padStart(2, '0')}</span>
                </div>
                <div className='stopwatch__controls'>
                    <button className='stopwatch__button stopwatch__button--start' onClick={handleStart}>Start</button>
                    <button className='stopwatch__button stopwatch__button--stop' onClick={handleStop}>Stop</button>
                    <button className='stopwatch__button stopwatch__button--reset' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default StopWatch