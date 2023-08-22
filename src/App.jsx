import './App.css'

function App() {

  const handleAddUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);
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
