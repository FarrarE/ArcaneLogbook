import React from 'react';
import { v4 as uuid } from 'uuid';

function AddCard(props) {

    var card = {
        title: "",
        edition: "",
        uuid: ""
    }

    function titleHandler(event) {
        card.title = event.target.value;
    }

    function editionHandler(event) {
        card.edition = event.target.value;
    }

    function submit() {
        card.uuid = uuid();
        console.log(card);
        props.submit(card);
    }

    return (
        <React.Fragment>
            <div className="backdrop" />
            <div className="addCard-container">
                <h1>Campaign</h1>
                <input
                    type='text'
                    onChange={titleHandler}
                    placeholder="Title"
                />
                <input
                    type='text'
                    onChange={editionHandler}
                    placeholder="Edition"
                />
                <div className="button-container">
                    <button onClick={props.close}>Cancel</button>
                    <button onClick={submit} >Submit</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddCard;