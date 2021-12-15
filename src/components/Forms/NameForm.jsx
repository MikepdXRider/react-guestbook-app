import React, { useState } from 'react'
// import custom hooooook! 


export default function NameForm() {
    const [nameField, setNameField] = useState('');
    // destructure custom hook here

    function handleSubmit() {
        // send the nameField to the global name state.
    }
    
    return (
        <form onSubmit={() => handleSubmit()}>
            <fieldset>
                <legend>Name</legend>
                <input value={nameField} onChange={(e) => setNameField(e.target.value)} type="text" />
                <button>Add Name</button>
            </fieldset>
        </form>
    )
}
