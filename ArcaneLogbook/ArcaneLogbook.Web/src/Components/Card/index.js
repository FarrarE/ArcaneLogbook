import React from 'react';

function Card(props) {
    return (
        <div className="card" onClick={() => props.onClick(props.id)}>
            <h3>{props.title}</h3>
            <div>
                {props.body}
            </div>
        </div>
    )
}

export default Card;