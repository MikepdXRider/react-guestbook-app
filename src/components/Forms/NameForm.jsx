import React, { useState } from 'react'
import { useUser } from '../../context/UserContext/UserContext.jsx';

export default function NameForm() {
    const [nameField, setNameField] = useState('');
    // ☝ Do not initialize your state with custom hooks. This is handled on the context level. 
    const {setUsername} = useUser();

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(nameField);
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset>
                <legend>Name</legend>
                <input value={nameField} onChange={(e) => setNameField(e.target.value)} type="text" />
                <button>Add Name</button>
            </fieldset>
        </form>
    )
}
