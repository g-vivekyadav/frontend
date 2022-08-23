import React from 'react';
import Useritem from './Useritem';
import './UsersList.css';

const UsersList = props =>{
    if(props.items.length === 0){
        return(
            <div className='center'>
                <h1> No users found</h1>
            </div>
        );
    }
    {console.log()}
    return(
    <ul>
        <h1>list of users</h1>
        {props.items.map(user=>{
        <h1>{user.name}</h1> 
        }
        )};
    </ul>
    );

}
export default UsersList;