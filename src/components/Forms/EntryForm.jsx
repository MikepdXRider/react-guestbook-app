import React, { useState } from 'react'
// import custom hook here
import { useEntries } from '../../context/EntriesContext/EntriesContext.jsx';
import { useUser } from '../../context/UserContext/UserContext.jsx';

export default function EntryForm() {
    const [entryField, setEntryField] = useState('');
    // destructure custom hook here
    const {setEntries} = useEntries();
    const {username} = useUser();

    function handleSubmit() {
        // send the entryField to the global entry state.
        setEntries((prevState) => [...prevState, {username, entry: entryField}]);
    }
    
    return (
        <form onSubmit={() => handleSubmit()}>
            <fieldset>
                <legend>Entry</legend>
                <input value={entryField} onChange={(e) => setEntryField(e.target.value)} type="text" />
                <button>Add Entry</button>
            </fieldset>
        </form>
    )
}
