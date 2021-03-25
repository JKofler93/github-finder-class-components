// initial state and actions go in here
// going to use types
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { 
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

        // Search for github users
        const searchUsers = async text => {
            setLoading(); // dispatches the type of setLoading to the reducer

            // makes the request
            const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
            &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

            // dispatches the type of SEARCH_USERS with the data
            // Reducer will be responsible for putting this into our state and sending it to our compoent s
            dispatch({
                type: SEARCH_USERS,
                payload: res.data.items
            });
          };

        // Get a single Github user
        const getUser = async username => {
            setLoading();
        
            const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.
            REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            
            dispatch({ 
                type: GET_USER,
                payload: res.data
            })
        }

    // Get repos

        // Clear Users from state
        const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // Set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value = {{ 
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers, 
                clearUsers,
                getUser
            }}
        >
        {/* want to wrap our entire application with the provider */}
            {props.children} 
        </GithubContext.Provider>
    );
};

export default GithubState;


