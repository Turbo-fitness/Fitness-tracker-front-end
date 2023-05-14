import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/ajaxHelpers";

const Register = ({ user, setUser, token, setToken, isLoggedIn,
    setIsLoggedIn }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
       console.log(username);

       const handleSubmit = async (event) => {
           event.preventDefault();

           const userAuth = {user: {username: username, password:password} };
           //Example below
           const data = await registerUser(userAuth);
           console.log(data)

           if(data){
               if(data.token) {
                   setToken(data.token)
                   setUser({username, token: data.token})
                   setIsLoggedIn(true)
               }
           }
           setUsername("");
           setPassword("");
           navigate("/login");
       }

   return (
       <>
           <div id="register">
       <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Username" value={username}
           onChange = {(event) => setUsername(event.target.value)} />
           <input type="text" placeholder="Password" value={password} 
           onChange = {(event) => setPassword(event.target.value)} />
           <button type="submit">Signup</button>
       </form>
    <h1 id="joinus">Join us because</h1>
    
    <img id="hans" src="https://media3.giphy.com/media/KHw2Oi9NNAxmo/giphy.gif?cid=ecf05e47yn96wqf59vzglnwu1k3b0ptdf2qc69wxs8ax9gpe&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Hansandfranz" />
   </div>
   
   </>
   );
};

export default Register;