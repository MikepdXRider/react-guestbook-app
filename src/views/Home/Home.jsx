import React from 'react'
import Entries from '../../components/Entries/Entries'
import EntryForm from '../../components/Forms/EntryForm'


// This will be the primary landing page of the app. It will contain all of the components/elements that need to be rendered to the page(forms, entries, etc..)
export default function Home() {
    return (
        <div>
            <EntryForm />
            <Entries />
        </div>
    )
}
