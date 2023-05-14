import React from "react";
import { useNavigate } from 'react-router-dom';
import { deleteRoutine } from '../api/ajaxHelpers'
const Profile = ({ user, token, userRoutines, setUserRoutines, userActivities }) => {
   const navigate = useNavigate();
console.log("this is user", user)
   return(
      <>
      <h3>Currently logged in as {user.username}</h3>
      <h2>Your Profile</h2>
      <button onClick={() => { navigate('/newroutine')}}>Create New Routine</button> 

      {userRoutines.length ? (
         <>
         <h4>My Routines</h4>
         {userRoutines.map((routine) => {
            return (
              <article key={routine._id}>
                <h4>{routine.title}</h4>
                <p>{routine.description}</p>
                <p>Author: {user.username}</p>
                <button onClick={ async () => {
                const deletedRoutineId = routine._id
                await deleteRoutine(routine._id, token)
                setUserRoutines(userRoutines.filter(routine => routine._id !== deletedRoutineId))
               console.log(deletedRoutineId)
               }}>Delete Routine</button>
              </article>
            );
          })}
          <h4>My Activities</h4>
         {userActivities.map((activity) => {
            return (
              <article key={activity._id}>
                <h4>{activity.title}</h4>
                <p>{activity.content}</p>
                <p>Author: {activity.fromUser.username}</p>
              </article>
            );
          })}
      </>):(<h2>No Routines Yet...</h2>) }
   </>)
}







export default Profile;