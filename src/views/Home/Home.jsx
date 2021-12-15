import React from 'react'
import Entries from '../../components/Entries/EntryList'
import EntryForm from '../../components/Forms/EntryForm'
import NameForm from '../../components/Forms/NameForm.jsx'


// This will be the primary landing page of the app. It will contain all of the components/elements that need to be rendered to the page(forms, entries, etc..)
export default function Home() {
    return (
        <div>
            <NameForm />
            <EntryForm />
            <Entries />
        </div>
    )
}
