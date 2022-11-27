import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>category</th>
            
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&
            users?.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.category}</td>
                
                <td className="btn btn-primary text-black">Delete</td>
              </tr>
            ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Admin;
