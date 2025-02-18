import React, { useState } from "react";
import RepetitionExercise from "./components/Rep";
import DurationExercise from "./components/Duration";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // list of exercises and their type
  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Squats", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Plank", type: "duration" },
  ];

  // when user selects an exercise
  if (selectedExercise) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
        <h1>{selectedExercise.name}</h1>
        {selectedExercise.type === "repetition" ? (
          <RepetitionExercise name={selectedExercise.name} />
        ) : (
          <DurationExercise name={selectedExercise.name} />
        )}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Exercise Tracker</h1>
      <h2>Select an Exercise:</h2>
      {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => setSelectedExercise(exercise)}
          style={{ margin: "10px", padding: "10px" }}
        >
          {exercise.name}
        </button>
      ))}
    </div>
  );
}

export default App;
