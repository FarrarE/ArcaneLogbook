import { useEffect, useState } from 'react';
import {getSiteRoot} from '../helpers/common';

function getCampaigns(props) {
    const [result, setResult] = useState();
    const uri = `${getSiteRoot()}${props}`;
    
    useEffect(() => {
        makeCall().then(response => handleGet(response)).catch(error => handleError(error));
    }, []);

    async function makeCall() {
        return await fetch(uri);
    }

    function handleGet(response) {
        response.json().then(data => {
            setResult(data);
        })
    }

    function handleError(error) {
        console.log(error);
    }

    return result;
}

export default getCampaigns;