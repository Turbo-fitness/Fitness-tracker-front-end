import React from "react";
import { Routines } from "."

const Welcome = ({ isLoggedIn, user, routines, setRoutines }) => {
 return (
    <>
    { isLoggedIn ? (
      <>
      <h3>Welcome, {user.username}</h3><Routines routines={routines}/></>
    ):(
      <>
         <h3 id= "welcome">Welcome, welcome, welcome! Are you ready to sweat to the beat and get your heart pumping? Let's get those leg warmers on and start moving to the rhythm! Please login or register to make a New Routine.</h3>
         <Routines routines={routines} setRoutines={setRoutines}/>
      </>
      )}
    </>
 )
}

export default Welcome;