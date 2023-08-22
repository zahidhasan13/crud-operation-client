import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            _id: _id,
        }),
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount>0){
            setUsers(users.filter(user => user._id!== _id));
        }
    })
};
const handleUpdate = () => {};

  console.log(users);
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div className="all-user">
        {
            users.map(user => <User
            key={user._id}
            user={user}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            ></User>)
        }
      </div>
    </div>
  );
};

export default Users;
