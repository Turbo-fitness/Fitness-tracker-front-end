import React, { useState } from "react";
import {makeRoutine} from '../api/ajaxHelpers';
import { useNavigate } from 'react-router-dom';

const CreateRoutine = ({token, routines, setRoutines, user, setUserRoutines, userRoutines}) => {
const [name, setName] = useState('')
const [goal, setGoal] = useState('')
const [isPublic, setIsPuclic] = useState(false);

const navigate = useNavigate();

const handleSubmit= async (event) => {
    event.preventDefault();

    const newRoutine= {routine:{name: name, goal: goal, isPublic: isPublic}};
    const result = await makeRoutine(newRoutine, token);
    const author = result.data.routine.author.username
    
    
    if (result.data.routine){
       setRoutines([result.data.routine, ...routines]);
       if(author == user) {
        await setUserRoutines([result.data.routine, ...userRoutines])
       }
       navigate('/routines')
}}
    return ( 
        <form onSubmit= {handleSubmit}>
            <h2>New Routine</h2>
            <input placeholder='Name' type='text' value={name} required onChange={(event) => setTitle(event.target.value)}></input>
            <input placeholder='Goal' type='text' value={goal} required onChange={(event) => setDesc(event.target.value)}></input>
            <div>
                <label htmlFor="public-checkbox">Public:</label>
                <input type="checkbox" id="public-checkbox" checked={isPublic} onChange={(event) => setIsPublic(event.target.checked)}/>
            </div>   
            <button type='submit'>Create Routine</button>
        </form>

    )
}



export default CreateRoutine;