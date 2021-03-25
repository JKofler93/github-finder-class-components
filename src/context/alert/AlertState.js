// initial state and actions go in here
// going to use types
import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState)

        // Show Alert for empty form
        const setAlert = (msg, type) => {
            dispatch({ 
                type: SET_ALERT,
                payload: { msg, type }
            });
      
            setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
          }

    return (
        <AlertContext.Provider
            value = {{ 
                alert: state,
                setAlert
            }}
        >
        {/* want to wrap our entire application with the provider */}
            {props.children} 
        </AlertContext.Provider>
    );
};

export default AlertState;


