import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Section from "./components/Header/Section";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import About from "./components/About/About";
import Consult from "./components/Consult/Consult";
import Contact from "./components/Contact/Contact";
import store, { rrfProps } from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageIcon from "./components/MessageIcon/MessageIcon";
import Signup from "./components/Forms/Signup";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import Signin from "./components/Forms/Signin";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
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
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Router>
          <MessageIcon />
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
