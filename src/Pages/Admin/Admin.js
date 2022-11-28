import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  const handleDelete =id=>{
    const proceed = window.confirm('Are you sure, you want ot cancel this user')
if(proceed){
   fetch(`http://localhost:5000/users/${id}`,{
    method:"DELETE"
   })
   .then(res => res.json())
   .then(data => console.log(data))
}
  }

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
                
                <td className="btn btn-primary text-black"  onClick={()=>handleDelete(user._id)} >Delete</td>
              </tr>
            ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Admin;
