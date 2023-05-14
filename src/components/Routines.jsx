import "./styles.css";
import React, {useEffect, useState} from "react";
import { makeRoutine, updateEntireRoutine, deleteRoutine, getAllRoutines } from '../api/ajaxHelpers';
import CreateUpdateRoutine from './CreateRoutine';


const Routines = ({ routines, setRoutines, isLoggedIn, username, token, id }) => {

	const [routineToUpdate, setRoutineToUpdate] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [routinesByUser, setRoutinesByUser] = useState([]);
	const [selectedRoutine, setSelectedRoutine] = useState([])
	useEffect(() => {

		if (isLoggedIn) {
			const savedUsername = JSON.parse(localStorage.getItem('user'));
			console.log(savedUsername)
			setRoutinesByUser(routines.filter(
				(routine) => routine.author && routine.author.username === savedUsername
			));
			console.log('users routines', routinesByUser.length);
		}
	}, []);

	const routineToCreate = () => {
		// craete a new routine
	}

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
					<h1>Ready to sweat? </h1>
					<button
						onClick={async () => {
							const newRoutine = await makeRoutine(routineToCreate, token);
							setRoutines([newRoutine.data.routine, ...routines]);
						}}
					>
						Create New routine
					</button>
					<button onClick={async () => {
						const updatedRoutine = await CreateUpdateRoutine(routine.id, routineToCompletelyUpdate);

						const listToReturn = routines.filter(routine => routine.id !== updatedRoutine.routine.id)
						setRoutines([updatedRoutine, ...listToReturn])
					}}
					>Update PUT Routine</button>
					<button>Update Patch Routine</button>
					
					<button
						onClick={async () => {
							id = undefined;
							setRoutines([...routines.filter((routine) => routine.id !== { routine })]);
						}}
					>
						Delete Routine
					</button>

					{routines.map((routine) => {
						return (
							<article key={routine.id}>

								<input
									type='checkbox'
									id='isPublic'
									name='vehicle1'
									value=''
								></input>
								{routine.author && routine.author.username === localStorage.getItem('username') && (
									<button id={routine.id} onClick={deleteRoutineHandler}>
										Delete
									</button>
								)}

								{routine.author && routine.author.username === localStorage.getItem('username') && (
									<button id={routine.id} onClick={updateRoutineHandler}>
										Update
									</button>
								)}
							</article>
						);
					})}
				</>
			) : (
				<>
				<h1>Hello Guest!</h1>
				<div className='container'>
				  {routines.length &&
					routines.map((routine) => {
					  return (
						<a href={`/routines/${routine.id}`} key={routine.id}>
						  <article name='routine' key={routine.id}>
							<h2>{routine.name}</h2>
							<img src='https://www.freepnglogos.com/uploads/dumbbell/dumbbell-clipart-etsy-3.png' />
							<p>By: {routine.creatorName}</p>
						  </article>
						</a>
					  );
					})}
					{selectedRoutine && (
        <div>
       
          <h2>{selectedRoutine.name}</h2>
          <p>{selectedRoutine.goal}</p>
          
          <button onClick={() => setSelectedRoutine(null)}>Close</button>
        </div>
      )}
				</div>
			  </>
			)}
		  </>
		);};

export default Routines;









