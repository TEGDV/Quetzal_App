import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "../organisms/Header.jsx";
import "../../assets/styles/templates/Index.scss";
const Index = () => {
  return (
    <div className="indexcontainer">
      <Header className="logo_header" />
      <Switch>
        <Route exact path="/Portfolio" />
        <Route exact path="/Products" />
        <Route exact path="/About" />
        <Route exact path="/Blog" />
      </Switch>
    </div>
  );
};

export default Index;
