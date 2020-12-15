import React from "react";
import { User } from '../../components'

const Users = () => {
  const users = [
    {id: 1, "name": "Jane Doe"},
    {id: 2, "name": "John Smith"}
  ]
  return (
    <div>
      <h1>All users</h1>
      {users.map((user) => <User user={user} key={user.id} />)}
    </div>
  )
};

export default Users;
