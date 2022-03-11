import React from 'react';
import NavBar from '../Navbar';
import Drawer from 'Components/Drawer';
import Button from 'Components/Button';
import { GiHamburgerMenu } from "react-icons/gi";

export function PageHeader({ header, children }) {
    return (
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <h2 className='mb-0'>{header && header.toUpperCase()}</h2>
            <div className='d-flex justify-content-end'>
                {children}
            </div>
        </div>
    )
}

export default function Page({ children }) {
    return (
        <React.Fragment>
            <Drawer id='NavDrawer' position='start' backdrop='true'>
                <NavBar />
            </Drawer>
            <Button
                className="p-2 fs-3 ms-3 d-flex jusify-content-center align-items-center rounded shadow-sm"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#NavDrawer"
                aria-controls="NavDrawer">
                <GiHamburgerMenu />
            </Button>
            <div className='container'>
                {children}
            </div>
        </React.Fragment>
    )
}