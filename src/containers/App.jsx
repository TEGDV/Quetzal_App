import React from "react";
import Hero from "../components/templates/Hero.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/Products" component={Hero} />
          <Route exact path="/Portfolio" component={Hero} />
          <Route exact path="/About" component={Hero} />
          <Route exact path="/Blog" component={Hero} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
