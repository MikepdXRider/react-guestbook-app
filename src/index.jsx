import { render } from 'react-dom';
import App from './App';
import { EntriesProvider } from './context/EntriesContext/EntriesContext.jsx';
import { UserProvider } from './context/UserContext/UserContext.jsx';

render(
    <UserProvider>
        <EntriesProvider>
            <App />
        </EntriesProvider>
    </UserProvider>
    ,
    document.getElementById('root')
);
