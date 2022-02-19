import React, { useState, useEffect } from 'react';
import { GiSwordman, GiEyeTarget, GiDeathSkull, GiThrownDaggers } from "react-icons/gi";
import Page, { PageHeader } from 'Components/Page';
import Searchbar from 'Components/Searchbar';
import Button from 'Components/Button';
import Card, { CardHeader, CardActions} from 'Components/Card';
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

function Map({ children }) {
    return (
        children.map(char =>
            <Card>
                <CardHeader title={char} subtitle='Level 1 ClassName'>
                    <GiThrownDaggers />&ensp;
                </CardHeader>
                <CardActions>
                    <Button>
                        <GiEyeTarget />
                    </Button>
                    <Button color='danger' toggle='modal' target='#deleteCharacterModal'>
                        <GiDeathSkull />
                    </Button>
                </CardActions>
            </Card>
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
            <Grid template='auto auto auto auto'>
                <Map>{characters}</Map>
            </Grid>
            <Modals />
        </Page>
    )
}