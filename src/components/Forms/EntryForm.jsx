import React, { useState } from 'react'
// import custom hook here

export default function EntryForm() {
    const [entryField, setEntryField] = useState('');
    // destructure custom hook here

    function handleSubmit() {
        // send the entryField to the global entry state.
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
