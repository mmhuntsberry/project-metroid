import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Browse from "./components/Browse";
import Discover from "./components/Discover";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
