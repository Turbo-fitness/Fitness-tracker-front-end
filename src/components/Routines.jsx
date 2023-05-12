import "./styles.css";
import React, {useEffect, useState} from "react";
import { makeRoutine, updateEntireRoutine, deleteRoutine, getAllRoutines } from '../api/ajaxHelpers';
import CreateUpdateRoutine from './CreateRoutine';


const Routines = ({ routines, setRoutines, isLoggedIn, username, token, id }) => {

	const [routineToUpdate, setRoutineToUpdate] = useState(null);
	const [showForm, setShowForm] = useState(false);

	// useEffect(() => {
	// 	let routinesByUser = [];

	// 	if (isLoggedIn) {
	// 		const savedUsername = localStorage.getItem('username');
	// 		routinesByUser = routines.filter(
	// 			(routine) => routine.author.username === savedUsername
	// 		);
	// 		console.log('users routines', routinesByUser.length);
	// 	}
	// }, []);

	const deleteRoutineHandler = async (e) => {
		const response = await deleteRoutine(
			e.target.id,
			localStorage.getItem('token')
		);

		if (response) {
			const filtered = routines.filter((routine) => routine.id != e.target.id);

			setRoutines((prev) => [...filtered]);
		}
	};

	const updateRoutineHandler = (e) => {
		setRoutineToUpdate(routines.find((routine) => routine.id == e.target.id));
		setShowForm(true);
	};

	return (
		<>
			{showForm && (
				<CreateUpdateRoutine
          routines={routines}
					setRoutines={setRoutines}
					isLoggedIn={isLoggedIn}
					token={token}
					routineToUpdate={routineToUpdate}
					setShowForm={setShowForm}
				/>
			)}
			{isLoggedIn ? (
				<>
					<h1>logged in</h1>
					<button
						onClick={async () => {
							const newRoutine = await makeRoutine(routineToCreate, token);
							setRoutines([newRoutine.data.routine, ...routines]);
						}}
					>
						Create New routine
					</button>
					<button onClick={async () => {
              const updatedRoutine = await updateEntireRoutine(routine.id, routineToCompletelyUpdate);

              const listToReturn = routines.filter(routine => routine.id !== updatedRoutine.routine.id)
              setRoutines([updatedRoutine, ...listToReturn])
            }}
            >Update PUT Routine</button>
					<button>Update Patch Routine</button>
					{/* <button
						onClick={async () => {
							await delete(id);
							setRoutines([...routines.filter((routine) => routine.id !== { routine })]);
						}}
					>
						Delete Routine
					</button>

					{routines.map((routine) => {
						return (
							<article key={routine.id}>
								<h2>{routine.title}</h2>
								<p>{routine.price}</p>
								<p>{routine.description}</p>

								<input
									type='checkbox'
									id='delivery'
									name='vehicle1'
									value=''
								></input>
								{routine.author.username === localStorage.getItem('username') && (
									<button id={routine.id} onClick={deleteRoutineHandler}>
										Delete
									</button>
								)}

								{routine.author.username === localStorage.getItem('username') && (
									<button id={routine.id} onClick={updateRoutineHandler}>
										Update
									</button>
								)}
							</article>
						);
					})} */}
				</>
			) : (
				<>
					<h1>Hello Guest!</h1>

					{routines.length && routines.map((routine) => {
						return (
							<article key={routine.id}>
								<h2>
									{routine.name} By: {routine.creatorName}
								</h2>
							</article>
						);
					})}
				</>
			)}
			;
		</>
	);
};

export default Routines;









