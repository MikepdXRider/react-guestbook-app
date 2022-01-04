// 
// ✔ Login form here.
// ✔ Import useUser hook. 
// ✔ controlled inputs
// on login attempt..
// ✔ - check to see if user input matches .env file info. 
//  ✔ - If falsey, give error. 
//  - If truthy
//    ✔ + set user 
//    ✔ + redirect to the previous page or landing page.
// *move login form to own component
// 
// 

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext.jsx'

export default function Login() {
    const {username, setUsername} = useUser();
    const history = useHistory();
    const [isError, setIsError] = useState(false);
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const { from } = location.state || { from: '/' };

    //  *Could be a replaced by a super-duper custom hook instead. Check out previous lab(react-treehouse-lab)
    // handleEmailChange
    function handleNameChange(e){
        setUsernameInput(e.target.value);
    }

    // handlePasswordChange
    function handlePasswordChange(e){
        setPasswordInput(e.target.value);
    }

    // *This could be moved into a login function in the UserProvider fn.
    function handleSubmit(e){
        e.preventDefault();
        const isAuthenticated = process.env.AUTH_NAME === usernameInput && process.env.AUTH_PASSWORD === passwordInput;
        console.log(isAuthenticated);
        if(isAuthenticated){
            setUsername(usernameInput);
            // ✔ update to be dynamic
            history.replace(from);
        } else {
            setIsError(true);
        }
    }

    return (
        <fieldset className="w-1/4 border p-4">
            <legend>Sign In</legend>
            <form className="grid grid-cols-[1fr_2fr] grid-rows-3" onSubmit={handleSubmit}>
                <label htmlFor="password" className="self-center text-right">
                    Username
                </label>
                <input
                id="username"
                type="text"
                name="username"
                className="border p-2 m-3"
                value={usernameInput}
                onChange={handleNameChange}
                required
                />

                <label htmlFor="password" className="self-center text-right">
                Password
                </label>
                <input
                id="password"
                type="password"
                name="password"
                className="border p-2 m-3"
                value={passwordInput}
                onChange={handlePasswordChange}
                required
                />

                <button
                type="submit"
                className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
                >
                Sign In
                </button>
            </form>
            { isError && <p className="text-center text-red-500 font-bold">Email or Password incorrect. Please try again.</p> }
        </fieldset>
    )
}

