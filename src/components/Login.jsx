import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, myData } from "../api/ajaxHelpers";
import './styles.css'


const Login = ({
	user,
	setUser,
	token,
	setToken,
	isLoggedIn,
	setIsLoggedIn,
}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	console.log(username);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const userAuth = { user: { username: username, password: password } };
		//Example below
		const data = await loginUser(userAuth);

		console.log(data)

		if(data){
			if (data.token) {
				setToken(data.token);
				setUser({ username: data.user.username, token: data.token });
	
				// save user and token in localStorage
				localStorage.setItem('username', data.user.username);
				//localStorage.setItem('token', data.token);
				setIsLoggedIn(true);
			}
		}
		setUsername('');
		setPassword('');
		navigate('/routines');
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<input
					type='text'
					placeholder='Password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
			<a href='/register'>Do you have an account? Sign up here!</a>
		</>
	);
};

export default Login