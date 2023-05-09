import React from "react";
import "./styles.css"
import Search from "./Search"

const Routines = ({ routines, setRoutines }) => {

  return (  
    <>
      <h2> All Routines</h2>
      <Search routines={routines} setRoutines={setRoutines} />
      {routines ? (
        <>
          {map.routines((routine) => {
            return (
              <article key={routine._id}>
                <h4>{routine.title}</h4>
                <p>{routine.description}</p>
                <p>Author: {routine.author.username}</p>
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

export default Routines;









