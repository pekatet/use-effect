import React, { Fragment, useEffect, useState } from 'react'
import List from './List'
import Details from './Details'

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({id:'', name:''})

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_USERS_URL);
        if (!response.ok){
          throw new Error(response.statusText);
        }
        const users = await response.json();
        setUsers(users);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUsers();
  }, []);

  function onUserClick (user) {
    console.log("onclick happened, user: ", user)
    setCurrentUser(user);
  }

  return (
    <Fragment>
      <List users={users} currentUser={currentUser} onUserClick={onUserClick}/>
      <Details info={currentUser}/>
    </Fragment>
  );
}

export default App;
