import React, { useState, useEffect } from "react";
import {
  Navbar,
  Login,
  Routines,
  Activities,
  Profile,
  Welcome,
  Register,
  CreateRoutine,
  CreateActivity
} from "./";
import { Routes, Route } from "react-router-dom";
import {  getAllRoutines, getAllActivities } from "../api/ajaxHelpers";

const Main = () => {
	const [routines, setRoutines] = useState([]);
	const [activities, setActivities] = useState([]);
	const [user, setUser] = useState({});
	const [userRoutines, setUserRoutines] = useState([])
	const [userActivities, setUserActivities] = useState([])
	const [token, setToken] = useState(localStorage.token);
	const [isLoggedIn, setIsLoggedIn] = useState(false);


  const getRoutines = async () => {
    const allRoutines = await getAllRoutines();
    setRoutines(allRoutines);
     };
     console.log(routines)

  useEffect(() => {
    console.log("HElLO")
    getRoutines();
  }, []);

  return (
    <>
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              user={user}
              isLoggedIn={isLoggedIn}
              Routines={Routines}
              setRoutines={setRoutines}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              setUserRoutines={setUserRoutines}
              setUserActivities={setUserActivities}
            />
          }
        />
        <Route
          path="/routines"
          element={
            <Routines routines={routines} setRoutines={setRoutines} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/user"
          element={
            <Profile
              routines={routines}
              setRoutines={setRoutines}
              user={user}
              token={token}
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
              userActivities={userActivities}
              setUserActivities={setUserActivities}
            />
          }
        />
        <Route
          path="/newRoutine"
          element={
            <CreateRoutine token={token} routines={routines} setRoutines={setRoutines} user={user} setUserRoutines={setUserRoutines} userRoutines={userRoutines}/>
          }
        />
        <Route
          path="/register"
          element={
            <Register
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </>
  );
};




export default Main;
