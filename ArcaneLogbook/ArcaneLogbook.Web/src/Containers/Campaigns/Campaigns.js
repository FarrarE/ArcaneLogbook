import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import AddCard from '../../Components/Card/AddCard';
import Campaign from '../Campaign/Campaign';

function Campaigns(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [campaignList, setCampaignList] = useState([]);
    const [addCardComponent, setAddCardComponent] = useState(null);

    useEffect(() => {
    }, []);

    function goTo(id) {
        location.assign(location.href + "/campaign/" + id)
    }

    function addButtonHandler() {
        setAddCardComponent(<AddCard close={closeAddCard} submit={addCampaign} />)
    }

    function closeAddCard() {
        setAddCardComponent(null);
    }

    function addCampaign(campaign) {
        var newCampain = <Card
            title={campaign.title}
            body={campaign.edition}
            id={campaign.uuid}
            onClick={goTo}
            key={campaignList.length} />

        closeAddCard();
        setCampaignList([...campaignList, newCampain]);
    }

    return (
        isLoading ?
            <div className="container view">
                <div id="campaign-header">
                    <h2>Campaigns</h2>
                    <button className="add-campaign" onClick={addButtonHandler} >Add</button>
                </div>
            </div>
            :
            <div className="container view">
                <div id="campaign-header">
                    <h2>Campaigns</h2>
                    <button className="add-campaign" onClick={addButtonHandler} >Add</button>
                </div>
                {campaignList}
                {addCardComponent}
            </div>
    )
}

export default Campaigns;