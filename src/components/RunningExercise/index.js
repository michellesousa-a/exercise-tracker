import React, { useState, useEffect } from "react";

function RunningExercise() {
  const [seconds, setSeconds] = useState(0); 
  const [running, setRunning] = useState(false); 
  const [lapTimes, setLapTimes] = useState([]); 

  // timer starts when user clicks start 
  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  // format for timer 
  function formatTime() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    return `${mins}:${secs}`;
  }

  // function to record lap time
  const recordLap = () => {
    setLapTimes([...lapTimes, formatTime()]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Timer display */}
      <p>Duration: {formatTime()}</p>
      
      {/* Buttons to control timer */}
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>
      
      {/* new button*/}
      <button onClick={recordLap}>Record Lap</button>
      
      {/* .map using an array of lap times stored as an array*/}
      <div>
        <h3>Lap Times:</h3>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>{lapTime}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;
