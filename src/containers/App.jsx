import React from "react";
import Hero from "../components/templates/Hero.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
import Index from "../components/templates/Index.jsx";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/Products" component={Index} />
          <Route exact path="/Portfolio" component={Index} />
          <Route exact path="/About" component={Index} />
          <Route exact path="/Blog" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
