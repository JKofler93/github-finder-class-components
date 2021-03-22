import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault();
        // we want to send this value up to the app component as a prop. by using the function searchUsers
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
        // this uses the name key in the input field


    render() {
        return (
            <div>
                <form 
                    className="form"
                    onSubmit={this.onSubmit}
                >
                    <input 
                        type="text" 
                        name="text" 
                        value={this.state.text} 
                        placeholder="Search Users..." 
                        onChange={this.onChange}  
                    />
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block"    
                    />
                </form>
            </div>
        )
    }
}

export default Search
