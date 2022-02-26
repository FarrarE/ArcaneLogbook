import React, { useEffect } from 'react';
import { getSiteRoot } from '../../helpers/common';
import { Dropdown as BsDropdown } from 'bootstrap';
import { GiBookCover } from "react-icons/gi";
import Button from 'Components/Button';

function NavItem({ href, children, dropdown }) {
    return dropdown ?
        <li className="nav-item dropdown text-black">
            {children}
        </li>
        :
        <li className="nav-item">
            <a className="nav-link text-black" href={href}>{children}</a>
        </li>
}

function DropdownMenu({ title, children }) {
    return (
        <React.Fragment>
            <a className="nav-link text-black" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{title}</a>
            <ul className="dropdown-menu shadow-sm">
                {children}
            </ul>
        </React.Fragment>
    )
}

function DropdownItem({ href, children }) {
    return <li><a className="dropdown-item" href={href}>{children}</a></li>
}

function User() {
    return (
        <div className='d-flex justify-content-end align-items-center' style={{width: '5rem'}}>
            <Button>Login</Button>
        </div>
    )
}

function Navbar(props) {
    return (
        <div className='nav navbar-light justify-content-between p-2'>
            <div style={{width: '5rem'}}></div>
            <ul className="nav d-flex flex-row">
                <a className="navbar-brand" href={getSiteRoot()}>
                    <GiBookCover />&ensp;
                    Arcane Logbook
                </a>
                <NavItem href={getSiteRoot() + "Campaigns"}>Campaigns</NavItem>
                <NavItem dropdown>
                    <DropdownMenu title='Characters'>
                        <DropdownItem href={getSiteRoot() + "Characters"}>Player Characters</DropdownItem>
                        <DropdownItem href={getSiteRoot() + "Characters/Npcs"}>NPC</DropdownItem>
                    </DropdownMenu>
                </NavItem>
                <NavItem href={getSiteRoot() + "Arena"}>Arena</NavItem>
                <NavItem href={getSiteRoot() + "About"}>About</NavItem>
            </ul>
            <User />
        </div>
    )
}

export default Navbar;
