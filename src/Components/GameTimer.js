import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

const GameTimer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  useEffect(() => {
    if(seconds===0){
        alert("you lose")
    }
  },[seconds])
   
  

  return (
    <div style={{textAlign: 'center'}}>
     
      {/* <h1>Timer</h1> */}
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
  
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 60);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default GameTimer;