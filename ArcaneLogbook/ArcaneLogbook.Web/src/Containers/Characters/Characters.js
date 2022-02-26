import React, { useState, useEffect } from 'react';
import { GiSwordman, GiEyeTarget, GiDeathSkull, GiThrownDaggers } from "react-icons/gi";
import Page, { PageHeader } from 'Components/Page';
import Searchbar from 'Components/Searchbar';
import Button from 'Components/Button';
import Grid from 'Components/Grid';
import Modal, { ModalHeader, ModalBody, ModalFooter } from 'Components/Modal';

const characters = ['Character Name', 'Character Name', 'Character Name', 'Character Name', 'Character Name'];

function Modals() {
    return (
        <React.Fragment>
            <Modal id='addCharacterModal'>
                <ModalHeader id='addCharacterModalLabel'>Add Character</ModalHeader>
                <ModalBody></ModalBody>
                <ModalFooter>
                    <Button color='secondary' dismiss='modal'>Close</Button>
                    <Button>Add</Button>
                </ModalFooter>
            </Modal>
            <Modal id='deleteCharacterModal'>
                <ModalHeader id='deleteCharacterModalLabel'>Delete Character</ModalHeader>
                <ModalBody></ModalBody>
                <ModalFooter>
                    <Button color='secondary' dismiss='modal'>Close</Button>
                    <Button color='danger'>Delete</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

function CharacterCard() {
    return (
        <div className="card shadow-sm" >
            <div className='card-body p-0 d-flex'>
                <div className='p-3 fs-2 d-flex justify-content-center align-items-center'>
                    <GiThrownDaggers />
                </div>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='flex-column'>
                        <h5 class="card-title text-nowrap">Character Name</h5>
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

function Map({ children }) {
    return (
        children.map(char =>
            <div className='col-xl-3 mb-3'>
                <CharacterCard />
            </div>
            // <Card>
            //     <CardHeader title={char} subtitle='Level 1 ClassName'>
            //         <GiThrownDaggers />&ensp;
            //     </CardHeader>
            //     <CardActions>
            //         <Button className='border-0 rounded-top align-items-center'>
            //             <GiEyeTarget />
            //         </Button>
            //         <Button className='border-0 rounded-bottom align-items-center' color='danger' toggle='modal' target='#deleteCharacterModal'>
            //             <GiDeathSkull />
            //         </Button>
            //     </CardActions>
            // </Card>
        ))
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
                <Map>{characters}</Map>
            </div>
            <Modals />
        </Page>
    )
}