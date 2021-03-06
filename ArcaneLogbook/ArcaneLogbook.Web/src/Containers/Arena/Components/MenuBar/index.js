import React, { useState } from "react";
import { GiDragonSpiral } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { AiFillUnlock } from 'react-icons/ai';
import { AiFillLock } from 'react-icons/ai';

function MenuBar(props) {
    const [locked, setLocked] = useState(false);

    function toggleLock() {
        props.toggleLock(props.type);
        setLocked(!locked);
    }

    function handleClose() {

        if (!locked) {
            if (props.type === 'options')
                props.toggleOptions();

            if (props.type === "tokenInfo")
                props.setSelectedToken(false);
        }
    }


    return (
        <div className="menu-bar">
            <div onClick={toggleLock}>
                {locked ?
                    <AiFillLock style={{ color: "#2196f3" }} />
                    :
                    <AiFillUnlock />
                }
            </div>
            <div>
                <GiDragonSpiral />
            </div>
            <div className="close-options">
                <CgCloseR onClick={handleClose} />
            </div>
        </div>
    );
}

export default MenuBar;