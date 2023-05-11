import React from "react";
import { Routines } from "."

const Welcome = ({ isLoggedIn, user, routines, setRoutines }) => {
 return (
    <>
    { isLoggedIn ? (
      <>
      <h3>Welcome, {user.username}</h3><Routines routines={Routines}/></>
    ):(
      <>
         <h3>Hello! Please login or register to make a New Post.</h3>
         <Routines routines={Routines} setRoutines={setRoutines}/>
      </>
      )}
    </>
 )
}

export default Welcome;