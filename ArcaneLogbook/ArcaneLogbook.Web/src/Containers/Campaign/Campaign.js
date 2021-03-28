import React from 'react';
import Card from '../../Components/Card';

function Campaign(props) {
    return (
        <div className="container view">
            <div id="campaign-header">
                <h2>{props.id} Test</h2>
            </div>
        </div>
    )
}

export default Campaign;