import React, { useState, useEffect } from "react";

function DurationExercise(props) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

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
    // reset the time
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

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>Duration: {formatTime()}</p>
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
    </div>
  );
}

export default DurationExercise;
