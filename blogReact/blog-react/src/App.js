import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Single from "../src/Pages/Single/Single"
import Write from "../src/Pages/Write/Write"
import User from "../src/Pages/User/User"
import Login from "../src/Pages/Login/Login"
import Register from "../src/Pages/Register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}>
        </Route>
        <Route exact path="/Register" Component={Register}>
        </Route>
        <Route exact path="/User" Component={User}>
        </Route>
        <Route exact path="/single" Component={Single}>
        </Route>
        <Route exact path="/write" Component={Write}>
        </Route>
        <Route exact path="/login" Component={Login}>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
