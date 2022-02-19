import React, { useEffect } from 'react';



export function ModalHeader({ id, children }) {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id={id}>{children}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    )
}

export function ModalBody({ children }) {
    return (
        <div className="modal-body">
            {children}
        </div>
    )
}

export function ModalFooter({ children }) {
    return (
        <div className="modal-footer">
            {children}
        </div>
    )
}

export default function Modal({ id, children }) {
    useEffect(() => {

    }, []);

    return (
        <div
            className="modal fade"
            id={id}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby={`${id}Label`}
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}