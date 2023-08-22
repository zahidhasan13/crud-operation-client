import './App.css'

function App() {

  const handleAddUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        form.reset();
        alert("User Added");
      }
    })
  }
  return (
    <>
      <div id="root">
        <h1>Add User</h1>
        <form onSubmit={handleAddUser}>
          <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
          </div>
          <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" />
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  )
}

export default App
