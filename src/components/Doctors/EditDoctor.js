import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firestore, storage } from '../../Firebase'

const EditDoctor = ({ doctor }) => {
    const { name, email, phone, working, speciality, photo } = doctor.data
    const nameRef = useRef(name)
    const emailRef = useRef(email)
    const phoneRef = useRef(phone)
    const workingRef = useRef(working)
    const specialityRef = useRef(speciality)
    const history = useHistory()
    const [file, setFile] = useState(photo)
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatePhoto = await storage.ref(`images/doctors/${file.name}`).put(file).then(snapshot => {
            return snapshot.ref.getDownloadURL()
        })

        const data = {
            id: doctor.id,
            name: nameRef.current.value ? nameRef.current.value : name,
            email: emailRef.current.value ? emailRef.current.value : email,
            phone: phoneRef.current.value ? phoneRef.current.value : phone,
            working: workingRef.current.value ? workingRef.current.value : working,
            speciality: specialityRef.current.value ? specialityRef.current.value : speciality,
            photo: updatePhoto ? updatePhoto : file
        }

        firestore.collection('doctor').doc(doctor.id).update(data).then(() => {
            alert('Successfully Edited')
            // history.go(0)
        })
    }

    return (
        <div className='doctorForm' >
            {console.log(nameRef.current)}

            <form action="post" className="doctorForm__form" onSubmit={handleSubmit}>
                <h1>Edit Doctor</h1>
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
                <button>Update</button>
            </form>
        </div>
    )
}
export default EditDoctor
