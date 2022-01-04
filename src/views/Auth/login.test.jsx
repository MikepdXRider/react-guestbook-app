import react from "react";
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext/UserContext.jsx';
import { EntriesProvider } from '../../context/EntriesContext/EntriesContext.jsx';
import Login from "./Login.jsx";

it('renders the login view', () => {
    const {container} = render(
            <UserProvider>
                <EntriesProvider>
                    <Login />
                </EntriesProvider>
            </UserProvider>
    );

    expect(container).toMatchSnapshot();
});