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

    function submit(){
        card.uuid = uuid();
        console.log(card);
        props.submit(card);
    }

    return (
        <div>
                <input
                    type='text'
                    onChange={titleHandler}
                />
                <input
                    type='text'
                    onChange={editionHandler}
                />
                <button onClick={props.close}>Cancel</button>
                <button onClick={submit} >Submit</button>
        </div>
    )

}

export default AddCard;