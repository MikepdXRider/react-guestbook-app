import React, { useState } from 'react'
// import custom hook here
import { useEntries } from '../../context/EntriesContext/EntriesContext.jsx';
import { useUser } from '../../context/UserContext/UserContext.jsx';

export default function EntryForm() {
    const [entryField, setEntryField] = useState('');
    // ☝ Do not initialize your state with custom hooks. This is handled on the context level. 
    const {setEntries} = useEntries();
    const {username} = useUser();

    function handleSubmit(e) {
        e.preventDefault()
        setEntries((prevState) => [...prevState, {username, entry: entryField}]);
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset>
                <legend>Entry</legend>
                <input value={entryField} onChange={(e) => setEntryField(e.target.value)} type="text" />
                <button>Add Entry</button>
            </fieldset>
        </form>
    )
}
