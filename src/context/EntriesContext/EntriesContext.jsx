import React, { createContext, useContext, useState } from 'react'


const EntriesContext = createContext();

const EntriesProvider = ({children}) => {
    const [entries, setEntries] = useState([]);

    return(
        <EntriesContext.Provider value={{entries, setEntries}}>
            {children}
        </EntriesContext.Provider>
    )
}

const useEntries = () => {
    const context = useContext(EntriesContext);
    
    if (context === undefined) throw new Error('useEntries must be declared within an EntriesProvider');
    
    return context;
}

export { EntriesProvider, useEntries }