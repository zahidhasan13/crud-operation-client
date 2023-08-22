/* eslint-disable react/prop-types */

const User = ({user, handleDelete, handleUpdate}) => {
    
    return (
        <div className="user">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className="btn">
                <button onClick={() => handleDelete(user._id)}>Delete</button>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default User;