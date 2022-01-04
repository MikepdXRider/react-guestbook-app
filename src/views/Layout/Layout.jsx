import React from 'react'
import Footer from '../../components/Layout/Footer.jsx'
import Header from '../../components/Layout/Header.jsx'


// This is where we'll pull in the header and footer components. We'll also have a main element which will contain the {children} props. 
export default function Layout({children}) {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
