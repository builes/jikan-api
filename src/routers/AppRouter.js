import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import GetAnimes from "../components/GetAnimes";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GetAnimes} />
        <Route exact path="/anime/:id" component={AnimeCard} />
      </Switch>
    </Router>
  );
}
