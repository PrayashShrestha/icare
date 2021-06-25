import React, { useState } from "react"
import { useRef } from "react"
import { firestore, storage } from "../../Firebase"
import './DoctorForm.css'
import { v4 as uuid } from 'uuid'
import { useHistory } from "react-router-dom"



const DoctorForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const workingRef = useRef(null)
    const specialityRef = useRef(null)
    const photoRef = useRef(null)
    const history = useHistory()
    const [file, setFile] = useState("")

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatePhoto = await storage.ref(`images/doctors/${file.name}`).put(file).then(snapshot => {
            return snapshot.ref.getDownloadURL()
        })
        const id = uuid()
        const data = {
            id: id,
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            working: workingRef.current.value,
            speciality: specialityRef.current.value,
            photo: updatePhoto
        }

        firestore.collection('doctor').doc(id).set(data).then(() => {
            alert('Successfully added')
            // history.go(0)
        })
    }

    return (
        <div className='doctorForm' >
            <form action="post" className="doctorForm__form" onSubmit={handleSubmit}>
                <h1>Add New Doctor</h1>
                <div className="doctorForm__fields">
                    <div className="doctorForm__field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" ref={nameRef} />
                    </div>
                    <div className="doctorForm__field">
                        <label htmlFor="name">Email:</label>
                        <input type="text" ref={emailRef} />
                    </div>
                    <div className="doctorForm__field">
                        <label htmlFor="name">Phone:</label>
                        <input type="text" ref={phoneRef} />
                    </div>
                    <div className="doctorForm__field">
                        <label htmlFor="name">Working:</label>
                        <input type="text" ref={workingRef} />
                    </div>
                    <div className="doctorForm__field">
                        <label htmlFor="name">Speciality:</label>
                        <input type="text" ref={specialityRef} />
                    </div>
                    <div className="doctorForm__field">
                        <label htmlFor="name">Photo:</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default DoctorForm;
