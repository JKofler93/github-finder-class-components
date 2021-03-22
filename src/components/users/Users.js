import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            }, 
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            }, 
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
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