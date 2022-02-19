import React from 'react';
import { TiContacts } from 'react-icons/ti';
import { RiTreasureMapLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';
import { CgMinimizeAlt } from 'react-icons/cg';

function ToolBar(props) {

    return (
        <div
            className='d-flex justify-content-between position-absolute top-0 start-50 translate-middle-x p-3 shadow rounded'
            style={{ width: '10rem' }}>
            <div className="edit-icon" onClick={() => props.toggleDrawerState('token')}>
                <TiContacts />
            </div>
            <div className="edit-icon" onClick={() => props.toggleDrawerState('map')}>
                <RiTreasureMapLine />
            </div>
            <div className="edit-icon" onClick={props.close} >
                <CgMinimizeAlt />
            </div>
            <div className="edit-icon" onClick={props.toggleOptions} >
                <BiCog />
            </div>
        </div>
    );
}

export default ToolBar;