import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {

    // These will be the default value of the props until we pass down props from a parent component.
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    // propTypes = type checking, tells us what our props type should be, for example: string, number, boolean ETC
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
