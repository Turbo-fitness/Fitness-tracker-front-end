import { useState } from "react";

function clickRoutines() {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const routines = [/* array of routines */];

  const handleRoutineClick = (routine) => {
    setSelectedRoutine(routine);
  };

  return (
    <div>
      <h1>Hello Guest!</h1>
      {routines.length &&
        routines.map((routine) => {
          return (
            <div key={routine.id} onClick={() => handleRoutineClick(routine)}>
              <article name="routine" key={routine.id}>
                <h2>{routine.name}</h2>
                <img src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-clipart-etsy-3.png" />
                <p>By: {routine.creatorName}</p>
              </article>
            </div>
          );
        })}
      {selectedRoutine && (
        <div>
       
          <h2>{selectedRoutine.name}</h2>
          <p>{selectedRoutine.description}</p>
          
          <button onClick={() => setSelectedRoutine(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default clickRoutines;