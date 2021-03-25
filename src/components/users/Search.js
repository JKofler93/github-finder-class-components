import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert}) => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState(''); 


    const onSubmit = e => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter something', 'light');
        } else {
        // we want to send this value up to the app component as a prop. by using the function searchUsers
        githubContext.searchUsers(text);
        setText('');
        }
    };

    const onChange = e => setText(e.target.value);
        // this uses the name key in the input field


        return (
            <div>
                <form 
                    className="form"
                    onSubmit={onSubmit}
                >
                    <input 
                        type="text" 
                        name="text" 
                        value={text} 
                        placeholder="Search Users..." 
                        onChange={onChange}  
                    />
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block"    
                    />
                </form>
                {githubContext.users.length > 0 && (                
                <button 
                    className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}
                >
                Clear
                </button>
                )} 
            </div>
        )
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired

}
export default Search
