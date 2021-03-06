import React, { useEffect, useState } from "react";
import Draggable from 'react-draggable';
import MenuBar from '../MenuBar';
import { AiOutlineHome } from 'react-icons/ai';

function OptionTray(props) {

    useEffect(() => {
        if (props.state)
            document.getElementById("optionTray").style.display = 'block';
        else document.getElementById("optionTray").style.display = 'none';
    }, [props.state]);


    return (
        <div className={props.mode} id="optionTray" >
            <Draggable handle=".handle">
                <div className="options">
                    <div className="handle">
                        <MenuBar toggleLock={props.toggleLock} toggleOptions={props.toggleOptions} type="options" />
                    </div>
                    <div>
                        Grid Size
                    </div>
                    <div>
                        <input type="range" min="10" max="100" className="slider" onInput={props.scaleGrid.bind(this)} />
                    </div>
                    <div>
                        Map Size
                    </div>
                    <div>
                        <input type="range" min="10" max="100" className="slider" onInput={props.scaleMap.bind(this)} />
                    </div>
                    <form action={window.location.toString().replace('Arena', 'Home')}>
                        <button className="route-link" type="submit" >
                            <AiOutlineHome />
                        </button>
                    </form>
                </div>
            </Draggable>
        </div>
    );
}

export default OptionTray;