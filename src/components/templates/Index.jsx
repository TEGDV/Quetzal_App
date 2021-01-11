import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../organisms/Header.jsx";
import "../../assets/styles/templates/Index.scss";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";

const Index = () => {
  return (
    <div className="indexcontainer">
      <Header className="logo_header" />
      <Switch>
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Products" />
        <Route exact path="/About" component={About} />
        <Route exact path="/Blog" />
      </Switch>
    </div>
  );
};

export default Index;
