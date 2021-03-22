import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: { login, avatar_url, html_url }}) => {

    // we are going to use the props passed down from User.js
    // state = {
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    // };

        // destructured component state
        // which makes us not have to use this.state.stateKey
        // did the deconstruction in the top of the component instead
        // const { login, avatar_url, html_url} = props.user;

        return (
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt="" 
                    className="round-img" 
                    style={{ width: '60px' }} 
                />
                <h3>{login}</h3>
                <div>

                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                        More
                    </Link>
                </div>
                
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}
export default UserItem;