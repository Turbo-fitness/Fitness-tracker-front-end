import React from "react";
import "./styles.css"


const Activities = ({ activities, setActivities }) => {

  return (  
    <>
      <h2> All Activities</h2>
      <Search activities={activities} setActivities={setActivities} />
      {activities ? (
        <>
          {activities.map((activity) => {
            return (
              <article key={activity._id}>
                <h4>{activity.name}</h4>
                <p>{activity.description}</p>
                {/* duration or reps */}
              </article>
            );
          })}
        </>
      ) : (
        <>
          <h2>loading...</h2>
        </>
      )}
    </>
  );
};

export default Activities;



