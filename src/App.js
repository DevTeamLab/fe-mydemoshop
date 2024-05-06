import './App.css';
import React, { useState } from 'react';
import UserService from './UserService';

function App() {

    const [user, setUser] = useState({ name: '', lastName: '', email: '', age: 0 });

    const onChangeInput = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const getUser = (userId) => {
        UserService.getUserById(userId)
            .then(response => setUser(response.data))
            .catch(error => console.error(`Error: ${error}`));
    }

    const createUser = (userData) => {
        UserService.createUser(userData)
            .then(response => setUser(response.data))
            .catch(error => console.error(`Error: ${error}`));
    }

  return (
    <div className="UserPage">
      <header className = "UserPage-header">
        <p className = "UserPage-header-topic"> DEMOSHOP </p>
        <p> by DevTeamLab </p>
      </header>
        <div className="UserPage-body">

            <form onSubmit={createUser}>
                <input type="text" placeholder="First Name"
                       name="name" value={user.name} onChange={onChangeInput}/>
                <input type="text" placeholder="Last Name"
                       name="lastName" value={user.lastName} onChange={onChangeInput}/>
                <input type="email" placeholder="Email"
                       name="email" value={user.email} onChange={onChangeInput}/>
                <input type="number" placeholder="Age"
                       name="age" value={user.age} onChange={onChangeInput}/>
                <button type="submit">Create User</button>
            </form>

        </div>
    </div>
  );
}

export default App;