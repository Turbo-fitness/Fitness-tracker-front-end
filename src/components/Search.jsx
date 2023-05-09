import React, { useState, useEffect } from "react";
import './styles.css'
const Search = ({routines, setRoutines}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchFunc = (routines, searchTerm) => {
        const result = routines.filter(routine => routine.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return result;
    }

    useEffect(() => {
        setRoutines(searchFunc(routines, searchTerm));
    }, [searchTerm]);
    
    return (
        <form>
            <span><label className='search' htmlFor='search'>Filter By Routine Titles</label>
            <input type='text' name='search' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/></span>
        </form>
    )
}

export default Search