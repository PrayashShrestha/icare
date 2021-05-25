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

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Section />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/predict" component={Predict} />
          <Route path="/about" component={About} />
          <Route path="/consult" component={Consult} />
          <Route path="/contact" component={Contact} />
          <Route path="/forms" component={Forms} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/details" component={DetailForm} />
        </Switch>
      </Router>
      <MessageIcon />
    </div>
  );
}

export default App;
