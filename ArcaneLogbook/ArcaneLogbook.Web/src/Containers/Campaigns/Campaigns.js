import React from 'react';
import Card from '../../Components/Card';

function Campaigns(props) {
    return (
        <div className="container view">
            <div id="campaign-header">
                <h2>Campaigns</h2>
                <button className="add-campaign">Add</button>
            </div>
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
            <Card title="CandleKeep Mysteries" body="Info and stuff" />
        </div>
    )
}

export default Campaigns;