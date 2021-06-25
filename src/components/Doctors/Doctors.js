import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../Firebase";
import DoctorForm from "./DoctorForm";
import "./Doctors.css";
import EditDoctor from "./EditDoctor";


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [doctorData, setDoctorData] = useState()

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setEdit(false)
  }

  const handleEdit = (editDoctor) => {
    setDoctorData(editDoctor)
    setEdit(true)

  }
  const removeDoctor = async (e, id) => {
    e.preventDefault()
    firestore.collection("doctor").doc(id).delete().then(() => {
      alert("Deleted Successfully")
    })
  }

  useEffect(() => {
    const fetch = async () => {
      await firestore.collection("doctor").onSnapshot((snapshot) => {
        setDoctors(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        })));
      });
    };
    fetch();
  }, []);
  return (
    <div className="doctorList">

      <Modal open={open} onClose={handleClose}>
        <DoctorForm />
      </Modal>
      <h1 className="doctorList__head">Doctors List</h1>
      <div className="doctors__add">
        <button className="add-btn" onClick={handleOpen}>Add New Doctor</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Working</th>
            <th>Speciality</th>
            <th>Photo</th>
          </tr>
          <Modal open={edit} onClose={handleClose}>
            <EditDoctor doctor={doctorData} />
          </Modal>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>

              <td>{doctor.data.name}</td>
              <td>{doctor.data.email}</td>
              <td>{doctor.data.phone}</td>
              <td>{doctor.data.working}</td>
              <td>{doctor.data.speciality}</td>
              <td><a href={doctor.data.photo} target="_blank">Image Link</a></td>
              <button
                style={{
                  color: "white",
                  backgroundColor: "rgb(227, 54, 54)",
                  padding: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "2px",
                  borderRadius: "5px"
                }}
                onClick={(event) => removeDoctor(event, doctor.id)}
              >
                X
              </button>
              <button
                style={{
                  color: "white",
                  backgroundColor: "rgb(199, 167, 78)",
                  padding: "5px",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "5px",
                  borderRadius: "5px"
                }}
              // onClick={(event) => removeUser(event, patient.id)}
              >
                <i className="fas fa-pencil-alt" onClick={() => handleEdit(doctor)} />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
