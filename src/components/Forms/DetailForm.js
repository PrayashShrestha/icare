import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Webcam from "react-webcam";
import { setLoading } from "../../actions/Actions";
import { firestore } from "../../Firebase";
import "./DetailForm.css";

//setting the constant parameter for the webcam
const videoConstraints = {
  width: 120,
  height: 100,
  facingMode: "user",
}; //facingMode as a user means the webcam or the selfie camera

const DetailForm = () => {
  const history = useHistory();
  const [camera, setCamera] = useState(false);
  const [photo, setPhoto] = useState("");
  const webcamRef = useRef(null);
  const uid = useSelector((state) => state.user.uid);
  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const checkLength = (e) => {};

  const handleCamera = (e) => {
    e.preventDefault();
    setCamera(!camera);
  };

  //useCallback hooks helps to set the value only when the parameter passed gets changed which avoids the rerendering of the component
  //It is same like sueMemo but use memo returns only the value of the function but the callBack returns the entire function object
  const capture = useCallback(
    (e) => {
      e.preventDefault();
      const profilePic = webcamRef.current.getScreenshot();
      setPhoto(profilePic);
    },
    [webcamRef]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { option, phone, address, date } = e.target.elements;
    const collectionName = option.value === "patient" ? "patient" : "doctor";
    try {
      await firestore.collection(collectionName).doc(uid).set({
        id: uid,
        createdAt: new Date(),
        name: name,
        category: option.value,
        email: email,
        phone: phone.value,
        address: address.value,
        dob: date.value,
        photo: photo,
      });
      alert("Success");
      dispatch(setLoading(true));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="detailForm" onSubmit={handleSubmit}>
      <h3>Detail Form</h3>
      <span className="detailForm__mssg">
        Thankyou for joining us (Prayash Shrestha), please fill out your
        details.
      </span>
      <div className="detailForm__item">
        <label htmlFor="selection">Select:</label>
        <select name="option" id="option" defaultChecked="patient">
          <option value="patient" id="patient">
            Patient
          </option>
          <option value="doctor" id="doctor">
            Doctor
          </option>
        </select>
      </div>

      <div className="detailForm__item">
        <label htmlFor="address" id="phone">
          Phone:
        </label>
        <input
          type="number"
          name="phone"
          maxLength={10}
          onChange={() => {
            checkLength();
          }}
          required
        />
      </div>
      <div className="detailForm__item">
        <label htmlFor="address" id="address">
          Address:
        </label>
        <input type="text" name="address" required />
      </div>

      <div className="detailForm__item">
        <label htmlFor="address">Date of Birth:</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Select Date"
          required
        />
      </div>
      {/* Camera div popup */}
      <div className="detailForm__camera">
        <div
          className={
            camera ? "detailForm__popupCamera" : "detailForm__hideCamera"
          }
        >
          <i className="fas fa-times hideCamera" onClick={handleCamera}></i>
          <div className="popupCamera__text">
            Place your device in front of your face and then click Capture
          </div>
          <div className="detailField__webcam">
            {camera && (
              <Webcam
                audio={false}
                height={videoConstraints.height}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
                ref={webcamRef}
              ></Webcam>
            )}
          </div>
          <span
            style={{
              textAlign: "center",
              width: "100%",
              marginLeft: "35%",
              color: "rgb(211, 12, 12)",
            }}
          >
            Captured Photo
          </span>
          <div className="webcam__img">
            <img src={photo} alt="" />
          </div>
          <div className="capture__btns">
            <button className="webcam__capture" onClick={capture}>
              Capture
            </button>
            {photo && (
              <button className="webcam__capture ok" onClick={handleCamera}>
                Ok
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Pic upload Buttons */}
      <div className="detailForm__item">
        <label htmlFor="address">Upload a pic:</label>
        <div className="detailForm__photoBtns">
          <button className="takePhoto" onClick={handleCamera}>
            Take Photo
          </button>
          <span>OR</span>
          <button className="uploadPhoto">Upload from device</button>
        </div>
      </div>
      <div className="detaiForm__submit">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default DetailForm;
