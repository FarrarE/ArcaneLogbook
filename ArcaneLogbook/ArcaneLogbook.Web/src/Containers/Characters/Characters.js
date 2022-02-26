import React, { useState, useEffect } from 'react';
import { GiSwordman, GiEyeTarget, GiDeathSkull, GiThrownDaggers } from "react-icons/gi";
import Page, { PageHeader } from 'Components/Page';
import Searchbar from 'Components/Searchbar';
import Button from 'Components/Button';
import Modals from './Modals';

const characters = ['Character Name', 'Character Name', 'Character Name', 'Character Name', 'Character Name'];

function CharacterCard({ name }) {
    return (
        <div className="card shadow-sm" >
            <div className='card-body p-0 d-flex'>
                <div className='p-3 fs-2 d-flex justify-content-center align-items-center'>
                    <GiThrownDaggers />
                </div>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='flex-column pt-1'>
                        <h5 class="card-title text-nowrap">{name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-nowrap">level</h6>
                    </div>
                    <div className='btn-group-vertical'>
                        <Button className='border-0 rounded-top justify-content-center align-items-center'>
                            <GiEyeTarget />
                        </Button>
                        <Button
                            className='border-0 rounded-bottom justify-content-center align-items-center'
                            color='danger'
                            toggle='modal'
                            target='#deleteCharacterModal'>
                            <GiDeathSkull />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Characters(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    }, []);

    return (
        <Page header='Characters'>
            <PageHeader header="Characters">
                <Searchbar className='me-2' />
                <Button toggle='modal' target='#addCharacterModal'>
                    <GiSwordman />
                    &ensp;Add
                </Button>
            </PageHeader>
            <div className='row'>
                {characters.map(char =>
                    <div className='col-xl-3 mb-3'>
                        <CharacterCard name={char} />
                    </div>
                )}
            </div>
            <Modals />
        </Page>
    )
}