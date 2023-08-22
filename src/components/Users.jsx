import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div className="all-user">
        {
            users.map(user => <User
            key={user._id}
            user={user}
            ></User>)
        }
      </div>
    </div>
  );
};

export default Users;
