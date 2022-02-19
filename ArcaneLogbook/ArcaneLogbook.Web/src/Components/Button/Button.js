import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ className, children, color, toggle, target, dismiss }) {
    let buttonClass;
    switch (color) {
        case 'secondary':
            buttonClass = 'btn btn-sm btn-outline-secondary shadow-sm';
            break;
        case 'danger':
            buttonClass = 'btn btn-sm btn-outline-danger shadow-sm';
            break;
        case 'dark':
            buttonClass = 'btn btn-sm btn-outline-dark shadow-sm';
            break;
        default:
            buttonClass = 'btn btn-sm btn-outline-primary shadow-sm';
            break;
    }


    return (!!toggle ?
        <button
            type="button"
            className={buttonClass}
            data-bs-toggle={toggle}
            data-bs-target={target}>
            {children}
        </button>
        :
        <button type="button" className={`${buttonClass} ${className}`} data-bs-dismiss={dismiss}>{children}</button>
    )
}

Button.PropTypes = {
    color: PropTypes.string
}

Button.defaultProps = {
    color: 'primary',
    dismiss: ''
}