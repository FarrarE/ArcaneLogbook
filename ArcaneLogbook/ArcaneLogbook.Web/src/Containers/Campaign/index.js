import React from 'react';
import ReactDOM from 'react-dom';
import Campaign from './Campaign';
 
// react
const root = document.getElementById('root');    
const props =  root.getAttribute('props');
ReactDOM.render(<Campaign id={props}/>, document.getElementById("root"));