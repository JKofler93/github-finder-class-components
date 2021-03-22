import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
    if(loading) {   
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid', // displays in a grid layout
    gridTemplateColumns: 'repeat(3, 1fr)', // puts items next to eacho ther in a 3 items in a row layout 
    gridGap: '1rem' // adds a gap between each UserItem
}

export default Users