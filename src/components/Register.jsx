import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, myData } from "../api/ajaxHelpers";

const Register = ({setIsLoggedIn, setToken, setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userAuth = {user: {username: username, password: password}}
        const { data } = await registerUser(userAuth)
        const currentUser = await myData(data.token);

        if(data.token) {
            setToken(data.token);
            setUser(currentUser);
            setIsLoggedIn(true);
            localStorage.setItem("token", data.token);
            
        }
        setUsername('');
        setPassword('');
        navigate('/routines')

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Register a New User</h2>
            <input required type='text' placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
            <input required type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type='submit'>Register & Login</button>
        </form>
        </>
    )
}

export default Register;