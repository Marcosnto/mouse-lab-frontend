import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/home/home";
import Favorites from "./pages/favorites/favorites";
import addNew from "./pages/addNew/addNew";
import NotFound from "./pages/notFound/notFound";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact="true" component={Home} />
        <Route path="/favorites" exact="true" component={Favorites} />
        <Route path="/new" exact="true" component={addNew} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
