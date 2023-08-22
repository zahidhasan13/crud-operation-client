import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const navigate = useNavigate();
    
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount>0){
                alert("Updated");
                form.reset();
                navigate("/users");
            }
            
        })
    }

    return (
        <div>
            <h2>User Update</h2>
            <form onSubmit={handleUpdate}>
          <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" defaultValue={loadedUser?.name}/>
          </div>
          <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" defaultValue={loadedUser?.email}/>
          </div>
          <button type="submit">Add User</button>
        </form>
        </div>
    );
};

export default Update;