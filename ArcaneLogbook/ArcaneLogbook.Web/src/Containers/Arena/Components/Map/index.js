import React, { useState, useEffect } from "react";

// Components
import ToolBar from '../ToolBar';
import Drawer from '../Drawer';
import OptionTray from '../OptionTray';
import Canvas from "../Canvas";

function Map(props) {
    // List of game states
    const [gameList, setGameList] = useState(null);

    // Current game state
    const [gameState, SetGameState] = useState({ gameId: null, mapKeys: [], tokenKeys: [] });

    // User interface variables
    const [tokenDrawerState, setTokenDrawerState] = useState(false);
    const [mapDrawerState, setMapDrawerState] = useState(false);
    const [optionTrayState, setOptionTrayState] = useState(false);
    const [locked, setLocked] = useState([]);

    // Canvas state variables
    const [mapList, setMapList] = useState([]);
    const [tokenList, setTokenList] = useState([]);
    const [currentMap, setCurrentMap] = useState(null);
    const [mapScale, setMapScale] = useState(1);
    const [gridScale, setGridScale] = useState(50);
    const [toDrop, setToDrop] = useState(null);

    useEffect(() => {
    }, []);

    // User interface functions
    function toggleOptionTray() {
        if (!locked.includes("options"))
            setOptionTrayState(!optionTrayState);
    }

    function toggleLock(toLock) {
        let index = locked.indexOf(toLock);

        if (index !== -1) {
            locked.splice(index, 1);
        } else locked.push(toLock);

    }

    // sets all visible panels to hidden.
    function closeAll() {
        if (!locked.includes("options"))
            setOptionTrayState(false);

        setTokenDrawerState(false);
        setMapDrawerState(false);
    }

    // Toggles drawer state
    function toggleDrawerState(type) {
        switch (type) {
            case 'token':
                if (mapDrawerState)
                    setMapDrawerState(!mapDrawerState);

                setTokenDrawerState(!tokenDrawerState);
                break;
            case 'map':
                if (tokenDrawerState)
                    setTokenDrawerState(!tokenDrawerState);

                setMapDrawerState(!mapDrawerState);
                break;
            default:
        }
    }

    // Canvas variable functions
    function changeMap(event) {
        let newMap = mapList[event.target.id[0]]
        setCurrentMap(newMap.img);
    }

    // function called on slider change in optionTray. Uses slider value to define map scale
    function scaleMap(event) {
        let scale = event.target.value / 50;
        setMapScale(scale);
    }

    // function called on slider change in optionTray. Uses slider value to define grid scale.
    function scaleGrid(event) {
        let scale = parseInt(event.target.value);
        setGridScale(scale);
    }

    function dragHandler(target) {
        setToDrop(target);
    }

    return (
        <React.Fragment>
            <Canvas
                mode={props.mode}
                gridScale={gridScale}
                currentMap={currentMap}
                mapScale={mapScale}
                toDrop={toDrop}
                setToDrop={setToDrop}
            />
            <OptionTray
                mode={props.mode}
                scaleGrid={scaleGrid}
                scaleMap={scaleMap}
                toggleMode={props.toggleMode}
                handleLogout={props.handleLogout}
                state={optionTrayState}
                toggleOptions={toggleOptionTray}
                toggleLock={toggleLock}
            />
            <ToolBar
                mode={props.mode}
                toggleDrawerState={toggleDrawerState}
                toggleOptions={toggleOptionTray}
                close={closeAll}
            />
            <Drawer
                mode={props.mode}
                state={tokenDrawerState}
                tokens={tokenList}
                dragHandler={dragHandler}
            />
            <Drawer
                mode={props.mode}
                state={mapDrawerState}
                maps={mapList}
                changeMap={changeMap}
            />
        </React.Fragment>
    );
}

export default Map;