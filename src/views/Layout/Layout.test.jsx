import react from "react";
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext/UserContext.jsx';
import { EntriesProvider } from '../../context/EntriesContext/EntriesContext.jsx';
import Layout from "./Layout.jsx";

it('renders the home view', () => {
    const {container} = render(
            <UserProvider>
                <EntriesProvider>
                    <Layout />
                </EntriesProvider>
            </UserProvider>
    );

    expect(container).toMatchSnapshot();
});