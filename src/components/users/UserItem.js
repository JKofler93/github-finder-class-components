import React, { Component } from 'react'

class UserItem extends Component {

    // we are going to use the props passed down from User.js
    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    // };

    render() {
        // destructured component state
        // which makes us not have to use this.state.stateKey
        const { login, avatar_url, html_url} = this.props.user;

        return (
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt="" 
                    className="round-img" 
                    style={{ width: '60px'}} 
                />

                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
                
            </div>
        )
    }
}


export default UserItem;