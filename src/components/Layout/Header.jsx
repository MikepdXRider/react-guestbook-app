import React from 'react'
import { useUser } from '../../context/UserContext/UserContext.jsx'

export default function Header() {
    const {username} = useUser();

    const userBool = Boolean(username);

    return (
        <header>
            {
                username
                ? <p>Welcome, {username}!</p>
                : <p>This is a header!</p>
            }
        </header>
    )
}
