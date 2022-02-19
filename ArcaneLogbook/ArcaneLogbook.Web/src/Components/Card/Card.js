import React from 'react';
import { GiEyeTarget, GiDeathSkull } from "react-icons/gi";
export default function Card(){
    return (
        <div className='d-flex justify-content-between flex-wrap'>
            <div className="card shadow-sm" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Character Name</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button type="button" className="btn btn-sm btn-outline-primary shadow-sm me-2"><GiEyeTarget />&ensp;View</button>
                    <button type="button" className="btn btn-sm btn-outline-danger shadow-sm"><GiDeathSkull />&ensp;Delete</button>
                </div>
            </div>
        </div>
    )
}