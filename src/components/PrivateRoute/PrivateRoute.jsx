import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserContext/UserContext.jsx'

/**
 * @param children - children component(s)
 * @param rest - spread of all the magical/under the hood props
 * @returns a route to desired location or a redirect to the login page
 */
export default function PrivateRoute({children, ...rest}) {
    const { username } = useUser();

    return (
        <Route 
            {...rest}
            render={({location}) =>
                username
                ? (
                    children
                ) 
                : (
                    <Redirect 
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            } 
        />
    )
}
