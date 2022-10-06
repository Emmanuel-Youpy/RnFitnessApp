import React, { useState, createContext, Children } from "react";

const FitnessItems = createContext();

const FitnnessContext = ({ Children }) => {
  const [completed, setCompleted] = useState();
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {Children}
    </FitnessItems.Provider>
  );
};

export { FitnnessContext, FitnessItems };
