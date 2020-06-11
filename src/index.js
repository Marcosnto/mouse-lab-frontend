import React from "react";
import ReactDOM from "react-dom";

import Home from "./Pages/Home/home";
import Favorites from "./Pages/Favorites/favorites";
import addNew from "./Pages/AddNew/addNew";
import NotFound from "./Pages/NotFound/notFound";
import toManage from "./Pages/Manage/toManage";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/favorites" exact={true} component={Favorites} />
        <Route path="/new" exact={true} component={addNew} />
        <Route path="/manage" exact={true} component={toManage} />
        <Route path="" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
