import React, { useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
//STEP 1 Whenever you want to use this in any component, import it in.
import GithubContext from '../../context/github/githubContext'

const Users = () => {
    //  STEP 2  Then initialize it, and call it on the variable name object, in this case is githubContext
    const githubContext = useContext(GithubContext);

    // Step 3 destructure the object props. 
    const { loading, users } = githubContext;

    if(loading) {   
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
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