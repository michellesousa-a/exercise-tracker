import React, { useState } from "react";
import RepetitionExercise from "./components/Rep";
import DurationExercise from "./components/Duration";
import RunningExercise from "./components/RunningExercise";  

import './App.css';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // list of exercises and their type
  const exercises = [
    { name: "Push-ups", type: "repetition", image: "pushup.jpg" },
    { name: "Squats", type: "repetition", image: "squat.jpeg" },
    { name: "Running", type: "running", image: "running.png" }, // New exercise type
    { name: "Plank", type: "duration", image: "plank.png" },
  ];

  // when user selects an exercise
  if (selectedExercise) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
        <h1>{selectedExercise.name}</h1>
        {selectedExercise.type === "repetition" ? (
          <RepetitionExercise name={selectedExercise.name} />
        ) : selectedExercise.type === "duration" ? (
          <DurationExercise name={selectedExercise.name} />
        ) : selectedExercise.type === "running" ? (
          <RunningExercise />
        ) : null}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Your Workout Tracker</h1>
      <h2>Select a Workout:</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {exercises.map((exercise, index) => (
          <div key={index} style={{ margin: "20px 0", textAlign: "center" }}>
            <img
              src={`/images/${exercise.image}`}
              alt={exercise.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                border: "3px solid black",
                borderRadius: "10px",
                marginBottom: "20px", // space between image and buttons
              }}
              onClick={() => setSelectedExercise(exercise)}
            />
            <br />
            <button
              onClick={() => setSelectedExercise(exercise)}
              style={{ padding: "10px", marginTop: "5px" }}
            >
              {exercise.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
