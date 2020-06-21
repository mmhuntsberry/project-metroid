import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Browse from "./components/Browse";
import Discover from "./components/Discover";
import GamePage from "./components/GamePage/GamePage.tsx";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import { games } from "./db/games.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/browse" component={Browse} />
          <Route
            exact
            path="/games/:id"
            component={() => <GamePage game={games[0]} />}
          />
        </Switch>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
