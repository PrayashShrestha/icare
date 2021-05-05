import { Provider } from "react-redux";
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
import Forms from "./components/Forms/Forms";
import Login from "./components/Forms/Login";
import Signup from "./components/Forms/Signup";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Section />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/predict" component={Predict} />
            <Route path="/about" component={About}></Route>
            <Route path="/consult" component={Consult}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/forms" component={Forms}></Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
        <MessageIcon />
      </div>
    </Provider>
  );
}

export default App;
