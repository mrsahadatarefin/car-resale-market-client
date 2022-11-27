import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    if(user?.email) {
      fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl mb-5">Booking products</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Number</th>
              <th>location</th>
              <th>product name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(bookings) && bookings?.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.number}</td>
                <td>{booking.location}</td>
                <td>{booking.product}</td>
                <td>{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
