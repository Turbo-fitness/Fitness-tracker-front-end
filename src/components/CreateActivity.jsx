import React, { useState } from "react";
import {makeActivity} from '../api/ajaxHelpers';
import { useNavigate } from 'react-router-dom';

const CreateActivity = ({token, activities, setActivities, user, setUserActivities, userActivities}) => {
const [name, setName] = useState('')
const [description, setDescription] = useState('')

const navigate = useNavigate();
const handleSubmit= async (event) => {
    event.preventDefault();
//------add one for duration/reps
    const newActivity= {activity:{name: name, description: description}}
    const result = await makeActivity(newActivity, token);
    const author = result.data.activity.author.username
    if (result.data.activity){
       setActivities([result.data.activity, ...activities]);
       if(author == user) {
        await setUserActivities([result.data.activity, ...userActivities])
       }
       navigate('/activities')
}}
    return ( 
        <form onSubmit= {handleSubmit}>
            <h2>New Activity</h2>
            <input placeholder='Name' type='text' value={name} required onChange={(event) => setName(event.target.value)}></input>
            <input placeholder='Description' type='text' value={goal} required onChange={(event) => setDescription(event.target.value)}></input>
            <button type='submit'>Create Activity</button>
        </form>

    )
}



export default CreateActivity;