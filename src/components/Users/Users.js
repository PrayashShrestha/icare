import axios from "axios";
import "./Users.css"
import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../Firebase";

const Users = () => {
  const [patients, setPatient] = useState([]);
  //delete the user
  const removeUser = (e, id) => {
    e.preventDefault();
    const data = { id: id }
    axios
      .post("http://localhost:5000/api/delete", data)
      .then((res) => {
        alert(res.data.status);
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      });
  }

  useEffect(() => {
    const fetch = async () => {
      await firestore.collection("patient").onSnapshot((snapshot) => {
        setPatient(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    };
    fetch();
  }, []);
  return (
    <div className="userList">
      <h1 className="userList__head">Users List</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Photo</th>
          </tr>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.data.name}</td>
              <td>{patient.data.dob ? patient.data.dob : '___'}</td>
              <td>{patient.data.email}</td>
              <td>{patient.data.phone ? patient.data.phone : '___'}</td>
              <td>{patient.data.address ? patient.data.address : '___'}</td>
              <td>{patient.data.photo ? 'photo' : '___'}</td>
              <td style={{ border: "none", textAlign: "start" }}>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "5px",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onClick={(event) => removeUser(event, patient.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
