import React from 'react';

export default function Searchbar({className}) {
    return <input className={`form-control ${className}`} type='search' id='searchbar' placeholder='Search' />
}