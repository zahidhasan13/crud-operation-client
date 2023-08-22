/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user, handleDelete}) => {
    
    return (
        <div className="user">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className="btn">
                <button onClick={() => handleDelete(user._id)}>Delete</button>
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
            </div>
        </div>
    );
};

export default User;