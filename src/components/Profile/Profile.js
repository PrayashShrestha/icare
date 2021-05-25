import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setErrors, setLoading } from "../../actions/Actions";
import { firestore } from "../../Firebase";
import { useHistory } from "react-router";

const Profile = () => {
  const uid = useSelector((state) => state.user.uid);
  const error = useSelector((state) => state.error.error);
  const userCategory = useSelector((state) => state.user.userCategory);
  const loading = useSelector((state) => state.loading.loading);

  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const response = async () => {
      //
      //
      const doc = await firestore.collection(userCategory).doc(`${uid}`).get();

      if (!doc.exists) {
        dispatch(setErrors("Error while loading data....."));
      } else {
        setUserData(doc.data()); // retriving the fields of the data
        console.log(userData);
      }
    };
    response();
  }, [uid, loading]);
  dispatch(setLoading(false));

  return (
    <div className="profile">
      <div className="profile__container">
        <h1 className="profile__header">Profile</h1>
        {error && <div>{error}</div>}
        {!userData ? (
          <div className="profile_notSet">You haven't set Your Profile Yet</div>
        ) : (
          <div className="profile__details">
            <div className="profile__item">
              <img src={userData.photo} alt="Image not Set" />
            </div>
            <div className="profile__item">
              <label htmlFor="name">
                {userData.name} ({userData.category})
              </label>
            </div>
            <div className="profile__item">
              <label htmlFor="email"> Your Email: </label>
              <span>{userData.email}</span>
            </div>
            <div className="profile__item">
              <label htmlFor="address">Address: </label>
              <span>{userData.address}</span>
            </div>
            <div className="profile__item">
              <label htmlFor="dob">Date of Birth: </label>
              <span>{userData.dob}</span>
            </div>
            <div className="profile__item">
              <label htmlFor="phone">Phone: </label>
              <span>{userData.phone}</span>
            </div>{" "}
          </div>
        )}
        <div className="profile__btns">
          <button onClick={() => history.push("/details")}>
            {userData ? "Add Details" : "Update Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
