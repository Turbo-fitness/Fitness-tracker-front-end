import React, { useState } from "react";
import {makeRoutine, updateEntireRoutine} from '../api/ajaxHelpers';

const CreateUpdateRoutine = ({
	routines,
	setRoutines,
	isLoggedIn,
	token,
	routineToUpdate,
	setShowForm,
}) => {
	const [name, setName] = useState(routineToUpdate ? routineToUpdate.name : '');
	const [goal, setGoal] = useState(routineToUpdate ? routineToUpdate.goal : '');

	const [location, setLocation] = useState(
		routineToUpdate ? routineToUpdate.location : ''
	);
	// const [deliver, setWillDeliver] = useState(false)

	const handleSubmit = async (event) => {
		event.preventDefault();

		const routineToCreate = {
			routine: {
				title: title,
				description: description,
				price: price,
				location: location,
			},
		};

		if (routineToUpdate) {
			//routine, token, routine.id
			// update routine otherwise create it as following

			const result = await updateEntireRoutine(
				routineToCreate,
				token,
				routineToUpdate.id
			);

			console.log(token);

			console.log(result);
			if (result) {
				const prevRoutines = [...routines];

				prevRoutines.map((routine) => {
					if (routine._id == result.data.routine._id) {
						routine = null;
						routine = { ...result.data.routine };
					}
					return routine;
				});
				setRoutines([...prevRoutines]);
			}

			window.location.href = '/routines';
			setShowForm(true);

			return;
		}

		const newRoutine = await makeRoutine(routineToCreate, token);
		setRoutines([newRoutine.data.routine, ...routines]);

		setTitle('');
		setDescription('');
		setPrice('');
		setLocation('');
	};

	return (
		<div>
			<h2>{routineToUpdate ? 'Update Routine' : 'Create Routine'}</h2>
			<form onSubmit={handleSubmit}>
				<input placeholder='Routine Name' type='text' value={name} required onChange={(event) => setTitle(event.target.value)}/>
				<input placeholder='Goal' type='text' value={goal} required onChange={(event) => setDescription(event.target.value)}/>
				
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};




export default CreateUpdateRoutine;