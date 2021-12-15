import React from 'react';
import { useEntries } from '../../context/EntriesContext/EntriesContext.jsx';
import Entry from './Entry.jsx';

export default function EntryList() {
    const {entries} = useEntries();

    return (
        <section>
            {
                entries[0] 
                // 💪 shout out to Zack & Erich(OG!) for this i(index) trick with the map and key. Yall the MVPs!!!
                ? entries.map((entry, i) => <Entry key={i} entry={entry}/>)
                : <p>Entries</p>
            }
        </section>
    )
}
