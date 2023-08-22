/* eslint-disable react/prop-types */

const User = ({user}) => {
    return (
        <div className="user">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default User;