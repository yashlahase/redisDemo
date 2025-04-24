import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchTime, setFetchTime] = useState(null);

  const fetchUsers = async () => {
    try {
      const startTime = performance.now();
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const endTime = performance.now();
      
      setFetchTime(endTime - startTime);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="metrics">
        <p>Fetch Time: {fetchTime ? `${fetchTime.toFixed(2)}ms` : 'N/A'}</p>
        <button onClick={fetchUsers}>Refresh Data</button>
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>Email: <a href={`mailto:${user.email}`} className="user-link">{user.email}</a></p>
              <p>Company: {user.company.name}</p>
              <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="user-link">{user.website}</a></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;