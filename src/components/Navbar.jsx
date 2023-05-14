import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css"

const Navbar = ({ setUser, setToken, setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
   return (
    <>
    <header className="top_title">

      
    
    <div >                             
        <h1 id="turbo">TURBO FITNESS</h1>
        
        </div>
      <nav>
        {isLoggedIn ? (
          <>
            <NavLink to="/routines">Browse Routines</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setUser({});
                setToken("");
                localStorage.removeItem("token");
                navigate("/");
              }}
              >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/welcome">Home</NavLink>
            <NavLink to="/routines">Routines</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
        </header>
    </>
  );
};

export default Navbar;