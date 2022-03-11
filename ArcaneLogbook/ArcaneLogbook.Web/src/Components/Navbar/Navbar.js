import React, { useEffect } from 'react';
import { getSiteRoot } from '../../helpers/common';
import { Dropdown as BsDropdown } from 'bootstrap';
import { GiBookCover, GiSwordman, GiCrossedSwords, GiBookmark, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import Button from 'Components/Button';
const navItemClass = 'hover-bg-primary ps-3 py-2 fs-4 d-flex align-items-center'
AiOutlineHome
function Navbar(props) {
    return (
        <div>
            <div className='px-3 pt-3'>
                <div class="d-flex justify-content-between align-items-center">
                    <h2 className="offcanvas-title"><GiBookCover />&ensp;Arcane Logbook</h2>
                    <Button className=" p-2 fs-3 d-flex jusify-content-center align-items-center" toggle="offcanvas" aria-label="Close"><GiHamburgerMenu /></Button>
                </div>
                <hr></hr>
            </div>
            <div>
                <div type='button' className={navItemClass}><AiOutlineHome />&nbsp;Home</div>
                <div type='button' className={navItemClass}><GiCrossedSwords />&nbsp; Arena</div>
                <div type='button' className={navItemClass}><GiBookmark />&nbsp; Campaigns</div>
                <div type='button' className={navItemClass}><GiSwordman />&nbsp; Characters</div>
            </div>
        </div>
    )
}

export default Navbar;
