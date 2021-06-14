import React from 'react';
import Navbar from '../../Components/Navbar';

function Home(props) {
    return (
        <React.Fragment>
            <Navbar />
            <div className="home-splash">
                <h1>Arcane Logbook</h1>
                <h2>Tabletop Campaign Toolset</h2>
            </div>
        </React.Fragment>
    )
}

export default Home;