import React from 'react'
import EntryList from '../../components/Entries/EntryList'
import EntryForm from '../../components/Forms/EntryForm'
import NameForm from '../../components/Forms/NameForm.jsx'
import { useUser } from '../../context/UserContext/UserContext.jsx'

// This will be the primary landing page of the app. It will contain all of the components/elements that need to be rendered to the page(forms, entries, etc..)
export default function Home() {
    const {username, setUsername} = useUser();

    function handleLogOut() {
        setUsername('');
    }

    return (
        <main>
            <section>
            {
                username 
                ? <div>
                    <p>Signed in as {username}</p>
                    <button onClick={() => handleLogOut()}>log out</button>
                </div>
                : <NameForm />
            }
            </section>

                <EntryForm />
                <EntryList />
        </main>
    )
}
