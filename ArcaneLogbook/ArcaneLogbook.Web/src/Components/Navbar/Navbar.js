import React, { useEffect } from 'react';
import { getSiteRoot } from '../../helpers/common';
import { Dropdown as BsDropdown } from 'bootstrap';
import { GiBookCover } from "react-icons/gi";

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


function Navbar(props) {
    return (
        <ul className="nav navbar-light justify-content-center">
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
        // <div className="nav">
        //     <a href={getSiteRoot()}>Arcane Logbook</a>
        //     <a href={getSiteRoot() + "Campaigns"}>Campaigns</a>
        //     <div className="dropdown">
        //         <button className="dropbtn">Characters
        //             <i className="fa fa-caret-down"></i>
        //         </button>
        //         <div className="dropdown-content">
        //             <a href={getSiteRoot() + "Characters"}>Player Characters</a>
        //             <a href={getSiteRoot() + "Characters/Npcs"}>NPCs</a>
        //         </div>
        //     </div>
        //     <a href={getSiteRoot() + "Arena"}>Arena</a>
        //     <a href={getSiteRoot() + "About"}>About</a>
        //     <a href={getSiteRoot() + "Contact"}>Contact</a>
        // </div>
    )
}

export default Navbar;
