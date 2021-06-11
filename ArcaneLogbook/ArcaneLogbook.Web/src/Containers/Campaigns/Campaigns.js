import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import AddCard from '../../Components/Card/AddCard';

import getCampaigns from '../../hooks/getCampaigns.js';
import postCampaign from '../../api/api';

function Campaigns(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [campaignList, setCampaignList] = useState([]);
    const [addCardComponent, setAddCardComponent] = useState(null);
    const campaigns = getCampaigns("api/campaigns/getCampaigns");

    useEffect(() => {

        if (campaigns !== undefined)
            init();

    }, [campaigns]);

    function init() {
        setCampaignList(campaigns.map(campaign => createCampaign(campaign.Name, campaign.Edition, campaign.Id)));
        setIsLoading(false);
    }

    function goTo(id) {
        location.assign(location.href + "/campaign/" + id)
    }

    function addButtonHandler() {
        setAddCardComponent(<AddCard close={closeAddCard} submit={addCampaign} />)
    }

    function closeAddCard() {
        setAddCardComponent(null);
    }

    function createCampaign(title, edition, id) {
        var newCampaign = <Card
            title={title}
            body={edition}
            id={id}
            onClick={goTo}
            key={title + id} />
        return newCampaign;
    }

    function addCampaign(campaign) {
        closeAddCard();
        postCampaign(campaign.uuid, campaign.title, campaign.edition, "1");
    }

    return (
        !isLoading &&
        <div className="container view">
            <div id="campaign-header">
                <h2>Campaigns</h2>
                <button onClick={addButtonHandler}>Add</button>
            </div>
            {addCardComponent}
            {campaignList}
        </div>
    )
}

export default Campaigns;