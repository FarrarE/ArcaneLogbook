import React, { useState } from "react";
import Button from 'Components/Button';
import FloatingSpan from 'Components/FloatingSpan';
import FloatingInput from 'Components/FloatingInput';
import Modal, { ModalHeader, ModalBody, ModalFooter } from 'Components/Modal';
import { GiThrownDaggers, GiCrosshairArrow, GiAxeSwing, GiWizardStaff } from "react-icons/gi";

const icons = [<GiThrownDaggers />, <GiAxeSwing />, <GiCrosshairArrow />, <GiWizardStaff />]

function IconCard({ children }) {
    const [selected, setSelected] = useState(false);

    return (
        <div className='m-1'>
            <div
                type='button'
                className={'icon-card p-1 me-3 fs-4 rounded ' + (selected ? 'icon-card-selected' : '')}
                onClick={() => setSelected(!selected)}>
                {children}
            </div>
        </div>
    )
}

export default function Modals() {
    return (
        <React.Fragment>
            <Modal id='addCharacterModal'>
                <ModalHeader id='addCharacterModalLabel'>Add Character</ModalHeader>
                <ModalBody>
                    <FloatingInput className='mb-3' label='Character Name' value='' />
                    <FloatingInput className='mb-3' label='Subtitle' value='' />
                    <FloatingSpan className='h-100 d-flex' label='Select Icon'>
                        {icons.map(icon => <IconCard>{icon}</IconCard>)}
                    </FloatingSpan>
                </ModalBody>
                <ModalFooter>
                    <Button color='secondary' dismiss='modal'>Close</Button>
                    <Button>Add</Button>
                </ModalFooter>
            </Modal>
            <Modal id='deleteCharacterModal'>
                <ModalHeader id='deleteCharacterModalLabel'>Delete Character</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color='secondary' dismiss='modal'>Close</Button>
                    <Button color='danger'>Delete</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}