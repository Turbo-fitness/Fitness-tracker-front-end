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
import {  getAllRoutines, getPrivateRoutines, getActivities } from "../api/ajaxHelpers";

const Main = () => {
	const [routines, setRoutines] = useState([]);
	const [privateRoutines, setPrivateRoutines] = useState([]);
	const [activities, setActivities] = useState([]);
	const [user, setUser] = useState({});
	const [userRoutines, setUserRoutines] = useState([])
	const [userActivities, setUserActivities] = useState([])
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  




  useEffect(() => {
    console.log("HElLO")
    const fetchData = async () => {
      console.log("this is getroutines")
      const allRoutines = await getAllRoutines();
      const privateRoutines = await getPrivateRoutines();
      const activitiesData = await getActivities();
      setRoutines(allRoutines);
      setPrivateRoutines(privateRoutines);
      setActivities(activitiesData);
       };
    fetchData();
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
              routines={routines}
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
