import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://spring-ftbnfyc5epdqambs.southindia-01.azurewebsites.net/api/questions')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;