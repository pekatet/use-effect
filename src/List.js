import './index.css'
import React from 'react'

function List ({users, currentUser, onUserClick}) {
  console.log('curr: ', currentUser)
  return(
    <div className="notes-list">
      {users.map(user => (
        <p className={user === currentUser ? "user-selected" : "user-non-selected"} key={user.id} onClick={() => onUserClick(user)}> {user.name} </p>
      ))}
    </div>
  )
}
export default List;