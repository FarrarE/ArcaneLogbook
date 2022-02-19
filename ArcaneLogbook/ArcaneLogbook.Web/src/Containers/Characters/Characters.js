import React, { useState, useEffect } from 'react';
import { GiSwordman } from "react-icons/gi";
import Page, { PageHeader } from 'Components/Page';
import Searchbar from 'Components/Searchbar';
import Card from 'Components/Card';

GiSwordman
function Characters(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    }, []);

    return (
        <Page header='Characters'>
            <PageHeader header="Characters">
                <Searchbar className='me-2 shadow-sm' />
                <button type="button" className="btn btn-sm btn-outline-primary shadow-sm"><GiSwordman />&ensp;Add</button>
            </PageHeader>
            <div className='d-flex justify-content-between flex-wrap gap-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <div style={{width: '18rem'}}></div>
            </div>
        </Page>
    )
}

export default Characters;