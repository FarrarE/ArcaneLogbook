import React from 'react';
import NavBar from '../Navbar';

export function PageHeader({ header, children }) {
    return (
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <h2 className='mb-0'>{header.toUpperCase()}</h2>
            <div className='d-flex justify-content-end'>
                {children}
            </div>
        </div>
    )
}

export default function Page({ children }) {
    return (
        <React.Fragment>
            <NavBar />
            <div className='container mt-3 p-3 shadow-sm rounded'>
                {children}
            </div>
        </React.Fragment>
    )
}