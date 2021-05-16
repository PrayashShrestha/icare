import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setErrors } from "../../actions/Actions";
import { auth } from "../../Firebase";
import Button from "../Button/Button";
import "./Forms.css";

const Signup = ({ signup }) => {
  // const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);

  //onFormSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, conformPassword } =
      e.target.elements;

    //check the datas in the user level
    if (password.value !== conformPassword.value) {
      return dispatch(setErrors("Passwords didnot match"));
    } else if (
      !(
        firstName.value &&
        lastName &&
        email.value &&
        password.value &&
        conformPassword.value
      )
    ) {
      return dispatch(setErrors("Fields are empty"));
    }

    //creating user in firebase
    try {
      await auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          result.user.updateProfile({
            displayName: `${firstName.value} ${lastName.value}`,
          });
          alert("success");
          console.log(result.user);
          history.push("/signin");
        })
        .catch((err) => {
          alert(err);
        });
    } catch {
      alert("Signup Failed");
    }

    dispatch(setErrors(""));
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__head">Signup Form</div>
      {error && <div className="login__error">{error}</div>}
      <div className="login__fields">
        <div className="login__field">
          <label>First Name:</label>
          <input type="text" name="firstName" id="firstName"></input>
        </div>
        <div className="login__field">
          <label>Last Name:</label>
          <input type="text" name="lastName" id="lastName"></input>
        </div>
        <div className="login__field">
          <label>Email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            name="email"
            id="email"
          ></input>
        </div>

        <div className="login__field">
          <label>Password:</label>
          <input type="text" name="password" id="password"></input>
        </div>
        <div className="login__field">
          <label>Confirm Password:</label>
          <input
            type="text"
            name="conformPassword"
            id="conformPassword"
          ></input>
        </div>
        <div className="login__btn">
          <Button type="submit">Signup</Button>
        </div>
        <div className="login__small">
          Already a member? <a href="/signin">Login</a>
        </div>
      </div>
    </form>
  );
};

export default Signup;
