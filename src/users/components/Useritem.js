import React from 'react';
import './Useritem.css';
const Useritem = props =>{
    return(
    <li className="user-item">
        <div className='user-item__content'>
            <h1>hello</h1>
            <div className='user-item__image'>
            </div>
            <h2>{props.name}</h2>
            <h3>{props.placeCount}</h3>
        </div>
    </li>
    );
}
export default Useritem;