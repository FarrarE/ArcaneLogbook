import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/Navbar";
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
        if (campaigns.Message === "An error has occurred.")
            return;

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

    function addCampaign({ uuid, title, edition }) {
        closeAddCard();
        setCampaignList([...campaignList, createCampaign(title, edition, uuid)])
        postCampaign(uuid, title, edition, "1");
    }

    return (
        <React.Fragment>
            <Navbar />
            {!isLoading &&
                <div className="container view">
                    <div id="campaign-header">
                        <h2>Campaigns</h2>
                        <button onClick={addButtonHandler}>Add</button>
                    </div>
                    {addCardComponent}
                    {campaignList.length > 0 && campaignList}
                </div>}
        </React.Fragment>

    )
}

export default Campaigns;