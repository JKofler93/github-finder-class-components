import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.text);
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
