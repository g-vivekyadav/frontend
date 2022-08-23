import React from 'react';
import UsersList from '../components/UsersList';
const Users =() => {
    const USERS=[{id: "1", name:"vivek", image:"ab" , places:4}];
    return(
    <UsersList items={USERS}/>
    );
};

export default Users;