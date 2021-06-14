import React from 'react';
import { getSiteRoot } from "../../helpers/common";

function Navbar(props) {

    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container nav-container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href={getSiteRoot()}>Arcane Logbook</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href={getSiteRoot() + "Campaigns"}>Campaigns</a></li>
                        <li className="dropdown-submenu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="nav-label">Characters</span><span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Player Characters</a></li>
                                <li><a href="#">NPCs</a></li>
                            </ul>
                        </li>
                        <li></li>
                        <li><a href={getSiteRoot() + "Arena"}>Arena</a></li>
                        <li><a href={getSiteRoot() + "About"}>About</a></li>
                        <li><a href={getSiteRoot() + "Contact"}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
