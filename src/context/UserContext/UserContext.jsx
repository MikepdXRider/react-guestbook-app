import React, { createContext, useContext, useState } from 'react'


const UserContext = createContext();

const UserProvider = ({children}) => {
    const [username, setUsername] = useState('');

    return(
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}


// 
// Could move to useAuth.jsx in the hooks folder. 
// 
const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) throw new Error('useUser must be declared within an UserProvider');

    return context;
}

export { UserProvider, useUser }