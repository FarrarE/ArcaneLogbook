import React, { useEffect } from 'react';
import { getSiteRoot } from '../../helpers/common';
import { Dropdown as BsDropdown } from 'bootstrap';
import { GiBookCover } from "react-icons/gi";

function NavItem({ href, children, dropdown }) {
    return dropdown ?
        <li className="nav-item dropdown">
            {children}
        </li>
        :
        <li className="nav-item">
            <a className="nav-link text-white" href={href}>{children}</a>
        </li>
}

function DropdownMenu({ title, children }) {
    return (
        <React.Fragment>
            <a className="nav-link text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{title}</a>
            <ul className="dropdown-menu">
                {children}
            </ul>
        </React.Fragment>
    )
}

function DropdownItem({ href, children }) {
    return <li><a className="dropdown-item" href={href}>{children}</a></li>
}


function Navbar(props) {
    const siteRoot = getSiteRoot();
    useEffect(() => {
        Array.from(document.querySelectorAll(`[data-bs-toggle="${'test'}"]`))
            .forEach(dropdown => new BsDropdown(dropdown));
    });

    return (
        <ul className="nav justify-content-center navbar-dark bg-dark">
            <a className="navbar-brand" href={siteRoot}>
                <GiBookCover />&ensp;
                Arcane Logbook
            </a>
            <NavItem href={siteRoot + "Campaigns"}>Campaigns</NavItem>
            <NavItem dropdown>
                <DropdownMenu title='Characters'>
                    <DropdownItem href={siteRoot + "Characters"}>Player Characters</DropdownItem>
                    <DropdownItem href={siteRoot + "Characters/Npcs"}>NPC</DropdownItem>
                </DropdownMenu>
            </NavItem>
            <NavItem href={siteRoot + "Arena"}>Arena</NavItem>
            <NavItem href={siteRoot + "About"}>About</NavItem>
        </ul>
        // <div className="nav">
        //     <a href={siteRoot}>Arcane Logbook</a>
        //     <a href={siteRoot + "Campaigns"}>Campaigns</a>
        //     <div className="dropdown">
        //         <button className="dropbtn">Characters
        //             <i className="fa fa-caret-down"></i>
        //         </button>
        //         <div className="dropdown-content">
        //             <a href={siteRoot + "Characters"}>Player Characters</a>
        //             <a href={siteRoot + "Characters/Npcs"}>NPCs</a>
        //         </div>
        //     </div>
        //     <a href={siteRoot + "Arena"}>Arena</a>
        //     <a href={siteRoot + "About"}>About</a>
        //     <a href={siteRoot + "Contact"}>Contact</a>
        // </div>
    )
}

export default Navbar;
