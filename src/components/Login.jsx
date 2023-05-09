import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, myData } from "../api/ajaxHelpers";
import './styles.css'


const Login = ({ setIsLoggedIn, setToken, setUser, setUserRoutines, setUserActivities}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const userObj = {user: {username: userName, password: password}}
        const { data } = await loginUser(userObj)
        const result = await myData(data.token);
        const {_id, username} = result.data
        if(data.token) {
            setToken(data.token);
                setUser({_id, username});
                setUserPosts(posts)
                setUserMessages(messages)
            setIsLoggedIn(true);
            localStorage.setItem("token", data.token);
            
        }
        setUserName('');
        setPassword('');
        navigate('/profile')

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
            <input required type='text' placeholder='username' value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <input required type='text' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        </>
    );
};

export default Login