import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setErrors } from "../../actions/Actions";
import "./Forms.css";
import axios from "axios";

const Signup = () => {
  // const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);

  //onFormSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, conformPassword } =
      e.target.elements;

    //check the datas in the user level
    if (password.value !== conformPassword.value) {
      return dispatch(setErrors("Passwords didnot match"));
    } else if (
      !(
        username.value &&
        email.value &&
        password.value &&
        conformPassword.value
      )
    ) {
      return dispatch(setErrors("Fields are empty"));
    }

    //creating user in firebase
    try {
      const data = {
        userName: username.value,
        email: email.value,
        password: password.value,
      };
      axios
        .post("http://localhost:5000/api/add/patient", data)
        .then((res) => {
          alert(res.data.status);
          history.push("/forms");
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });

      // await auth
      //   .createUserWithEmailAndPassword(email.value, password.value)
      //   .then((result) => {
      //     result.user.updateProfile({
      //       displayName: `${firstName.value} ${lastName.value}`,
      //     });
      //     alert("success");

      //     history.push("/forms");
      //   })
      //   .catch((err) => {
      //     alert(err);
      //   });
    } catch (e) {
      alert("Signup Failed");
    }
    dispatch(setErrors(""));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__head">Signup Form</div>
      {error && <div className="form__error">{error}</div>}
      <div className="form__fields">
        <div className="form__field">
          <label>Username:</label>
          <input type="text" name="username" id="username"></input>
        </div>
        <div className="form__field">
          <label>Email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            name="email"
            id="email"
          ></input>
        </div>
        <div className="form__field">
          <label>Password:</label>
          <input type="text" name="password" id="password"></input>
        </div>
        <div className="form__field">
          <label>Confirm Password:</label>
          <input
            type="text"
            name="conformPassword"
            id="conformPassword"
          ></input>
        </div>
        <div className="form__btn">
          <button type="submit">Signup</button>
        </div>
        <div className="form__small">
          Already a member? <a href="/signin">Login</a>
        </div>
      </div>
    </form>
  );
};

export default Signup;
