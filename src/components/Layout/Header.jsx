import React from 'react'
import { useUser } from '../../context/UserContext/UserContext.jsx'

export default function Header() {
    const {username} = useUser();

    const userBool = Boolean(username);

    return (
        <div>
            {
                username
                ? <p>Welcome, {username}!</p>
                : <p>This is a header!</p>
            }
        </div>
    )
}
