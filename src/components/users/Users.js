import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid', // displays in a grid layout
    gridTemplateColumns: 'repeat(3, 1fr)', // puts items next to eacho ther in a 3 items in a row layout 
    gridGap: '1rem' // adds a gap between each UserItem
}

export default Users