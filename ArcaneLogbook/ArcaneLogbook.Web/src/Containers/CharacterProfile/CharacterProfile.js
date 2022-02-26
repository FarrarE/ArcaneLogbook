import React from "react";
import Page, { PageHeader } from 'Components/Page';
import Button from 'Components/Button';
import { GiSwordman, GiEyeTarget, GiDeathSkull, GiThrownDaggers } from "react-icons/gi";

function CharacterCard({ name }) {
    return (
        <div className="shadow-sm" >
            <div className='card-body p-0 d-flex'>
                <div className='p-3 fs-2 d-flex justify-content-center align-items-center'>
                    <GiThrownDaggers />
                </div>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='flex-column pt-1'>
                        <h5 class="card-title text-nowrap">{name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-nowrap">level</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CharacterProfile() {
    return (
        <Page>
            <CharacterCard name='CharacterName' />
        </Page>
    );
}