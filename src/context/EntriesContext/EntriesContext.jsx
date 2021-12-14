import React, { createContext, useContext, useState } from 'react'


// Create a custom hook here
// CreateContext and assign to variable.
const EntriesContext = createContext();

// Define a functional component which recieves children as props, contains state, and returns a provider component with values.
const EntriesProvider = ({children}) => {
    const [entries, setEntries] = useState([]);

    return(
        <EntriesContext.Provider value={{entries, setEntries}}>
            {children}
        </EntriesContext.Provider>
    )
}

// Create the hook function. 
const useEntries = () => {
    //  pass the createdContext into useContext.
    const context = useContext(EntriesContext);
    //  handle undefined context(components attempting to declare/access/use our custom hook without being inside of a provider)
    if (context === undefined) throw new Error('useEntries must be declared within an EntriesProvider');
    
    //  return context
    return context;
}
