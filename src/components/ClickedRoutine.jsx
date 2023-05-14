import React, { useEffect, useState } from "react";
import { getActivityById } from "../api/ajaxHelpers";

const ClickedRoutine = ({ routineId }) => {
  const [routineData, setRoutineData] = useState({
    creatorName: "",
    name: "",
    goal: "",
    activity: []
  });

  useEffect(() => {
    async function fetchData() {
      const routineResponse = await getActivityById(routineId);
      setRoutineData(routineResponse.data.routine);
    }
    fetchData();
  }, [routineId]);

  return (
    <div id="clicked">
      <h2>{routine.name}</h2>
      <p>Created by: {routine.creatorID}</p>
      <p>Goal: {routine.goal}</p>

      <h3>Activities:</h3>
      <ul>
        {routineData.activity.map(activity => (
          <li key={activity.id}>
            <h4>{activity.name}</h4>
            <p>Description: {activity.description}</p>
            <p>Duration: {activity.duration} minutes</p>
            <p>Reps: {activity.count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickedRoutine;
