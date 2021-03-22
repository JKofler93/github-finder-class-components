import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 


const Navbar = ({ icon, title }) => {
    
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon}/> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
}

    // These will be the default value of the props until we pass down props from a parent component.
    // With functional components we use the name of the component instead of static. 
    Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    // propTypes = type checking, tells us what our props type should be, for example: string, number, boolean ETC
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

export default Navbar
