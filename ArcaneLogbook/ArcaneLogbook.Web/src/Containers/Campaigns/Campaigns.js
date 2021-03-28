import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import { v4 as uuid } from 'uuid';
function Campaigns(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [campaignList, setCampaignList] = useState([]);

    useEffect(()=>{
        console.log("Rerender")
    },[]);

    function goTo(id){
        location.assign(location.href + "/campaign/" + id)
    }

    function addCampaign(){
        var temp = <Card title="CandleKeep Mysteries" body="Info and stuff" id={uuid()} onClick={goTo} key={campaignList.length}/>;
        setCampaignList([...campaignList, temp]);
    }



    return (
        isLoading ?
            <div className="container view">
                <div id="campaign-header">
                    <h2>Campaigns</h2>
                    <button className="add-campaign" onClick={addCampaign} >Add</button>
                </div>
            </div>
            :
            <div className="container view">
                <div id="campaign-header">
                    <h2>Campaigns</h2>
                    <button className="add-campaign" onClick={addCampaign} >Add</button>
                </div>
                {campaignList}
            </div>
    )
}

export default Campaigns;