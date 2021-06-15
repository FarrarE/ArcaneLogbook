import React from 'react';
import { getSiteRoot } from "../../helpers/common";

function Navbar(props) {
    var siteRoot = getSiteRoot();

    return (
        <div className="navbar">
            <a href={siteRoot}>Arcane Logbook</a>
            <a href={siteRoot + "Campaigns"}>Campaigns</a>
            <div className="dropdown">
                <button className="dropbtn">Characters
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href={siteRoot + "PlayerCharacters"}>Player Characters</a>
                    <a href={siteRoot + "NonPlayercharacters"}>NPCs</a>
                </div>
            </div>
            <a href={siteRoot + "Arena"}>Arena</a>
            <a href={siteRoot + "About"}>About</a>
            <a href={siteRoot + "Contact"}>Contact</a>
        </div>
    )
}

export default Navbar;
