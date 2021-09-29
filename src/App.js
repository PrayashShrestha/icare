import { Provider, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Section from "./components/Header/Section";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import About from "./components/About/About";
import Consult from "./components/Consult/Consult";
import Contact from "./components/Contact/Contact";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageIcon from "./components/MessageIcon/MessageIcon";
import Signup from "./components/Forms/Signup";
import Signin from "./components/Forms/Signin";
import DetailForm from "./components/Forms/DetailForm";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Profile from "./components/Profile/Profile";
import Forms from "./components/Forms/Forms";
import AdminSignin from "./components/Forms/AdminSignin";
import Users from "./components/Users/Users";
import { useDispatch } from "react-redux";
import { setUser, setUserCategory } from "./actions/Actions";
import Doctors from "./components/Doctors/Doctors";
import Forget from "./components/Forms/Forget";

function App() {
  // useEffect(() => {
  //   firestore.collection("users").onSnapshot((snapshot) => {
  //     // console.log(snapshot.docs[0].data());
  //     const datas = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //   });
  // });
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        setUser(user.displayName, user.uid, user.email, user.emailVerified)
      );
      if (user.displayName === "admin") {
        dispatch(setUserCategory("admin"));
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Navbar />
        {!user.category && <Section />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/predict" component={Predict} />
          <Route path="/about" component={About} />
          <Route path="/consult" component={Consult} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route path="/forms" component={Forms} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path={`/profile`} component={Profile} />
          <Route path="/details" component={DetailForm} />
          <Route path="/forget-password" component={Forget} />
          <Route path="/admin-signin" component={AdminSignin} />
        </Switch>
      </Router>
      <MessageIcon />
    </div>
  );
}

export default App;
