import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Browse from "./components/Browse";
import Discover from "./components/Discover";
import GamePage from "./components/GamePage/GamePage.js";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import CreateGame from "./components/CreateGame";
import ScrollToTop from "./utils/hooks/ScrollToTop";
// import { games } from "./db/games.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/browse" component={Browse} />
<<<<<<< HEAD
          <Route exact path="/collections" component={Collections} />
          <Route
            exact
            path="/games/:id"
            component={() => <GamePage />}
          />
=======
          <Route exact path="/create-game" component={CreateGame} />
          <Route exact path="/games/:id" component={() => <GamePage />} />
>>>>>>> user
        </Switch>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
