import React from 'react';
import PropTypes from 'prop-types';

export default function Grid({template, children}){
    return(
        <div className='d-grid gap-3' style={{gridTemplateColumns: template}}>
            {children}
        </div>
    )
}

Grid.PropTypes = {
    template: PropTypes.string,
    children: PropTypes.node.isRequired
}

Grid.defaultProps = {
    template: 'auto'
}
