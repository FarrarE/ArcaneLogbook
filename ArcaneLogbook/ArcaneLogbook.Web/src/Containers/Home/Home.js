import React from 'react';
import Navbar from '../../Components/Navbar';

function Home(props) {
    return (
        <React.Fragment>
            <Navbar />
            <div className='d-flex flex-column align-items-center'>
                <h1>Arcane Logbook</h1>
                <h6>Tabletop Campaign Toolset</h6>
            </div>
        </React.Fragment>
    )
}

export default Home;