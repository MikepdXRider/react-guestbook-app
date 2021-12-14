import React, { createContext, useContext, useState } from 'react'


// Create a custom hook here
// CreateContext and assign to variable.
const UserContext = createContext();

// Define a functional component which recieves children as props, contains state, and returns a provider component with values.
const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// Create the hook function. 
const useUser = () => {
    //  pass the createdContext into useContext.
    const context = useContext(UserContext);
    //  handle undefined context(components attempting to declare/access/use our custom hook without being inside of a provider)
    if (context === undefined) throw new Error('useUser must be declared within an UserProvider');
    
    //  return context
    return context;
}