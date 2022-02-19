import React from 'react';


export function CardHeader({ title, subtitle, children }) {
    return <div className='d-flex flex-column align-items-center'>
        <h5 className="card-title">{children}{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{subtitle}</h6>
    </div>
}

export function CardBody({ children }) {
    return (
        <p className='card-text'>
            {children}
        </p>
    )
}

export function CardFooter({ className, children }) {
    return <div className={className}>{children}</div>
}

export function CardActions({ children }) {
    return <div className='d-flex h-100 p-2 justify-content-around flex-column position-absolute top-0 end-0'>
        {children}
    </div>
}

export default function Card({ children }) {
    return (
        <div className='d-flex justify-content-between flex-wrap position-relative'>
            <div className="card shadow-sm flex-grow-1" >
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}