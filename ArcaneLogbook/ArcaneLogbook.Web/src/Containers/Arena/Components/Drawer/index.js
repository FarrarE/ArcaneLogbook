import React, { useState } from "react";
import { RiAddLine } from 'react-icons/ri';
import { RiDeleteBin7Line } from 'react-icons/ri';

function Drawer(props) {

    let drawerState = 'drawer';
    if (props.state) {
        drawerState = 'drawer open'
    }
    else {
        drawerState = 'drawer';
    }
    return (
        <div className={drawerState} >
        </div>
    );
}

export default Drawer;