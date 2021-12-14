import React, { createContext } from 'react'

// Create a custom hook here
// CreateContext and assign to variable.
const EntriesContext = createContext();

// Define a functional component which recieves children as props, contains state, and returns a provider component with values.
const EntriesProvider = ({children}) => {
    const [state, setState] = useState([]);

}

// Create the hook function. 
    //  pass the createdContext into useContext.
    //  handle undefined context(components attempting to declare/access/use our custom hook without being inside of a provider)
    //  return context
