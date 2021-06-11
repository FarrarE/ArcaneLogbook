import {getSiteRoot} from "../helpers/common";

var siteRoot = getSiteRoot();

export default async function postCampaign(id, name, edition, userId){
    var path = `${siteRoot}api/campaigns/postCampaign`;

    await fetch(path, {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: "POST",
        body: JSON.stringify({
            Id: id,
            Name: name,
            Edition: edition,
            UserId: userId
        })
    }).then(() => console.log("Campaign Added")).catch(() => console.log("Campaign Add Failed"));
}