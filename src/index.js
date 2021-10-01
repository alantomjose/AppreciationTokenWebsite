import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

// layouts

// import Admin from "./layouts/Admin.js";
// import Auth from "./layouts/Auth.js";

// views without layouts

// import Landing from "./views/Landing.js";
// import Profile from "./views/Profile.js";
import Index from "./views/Index.js";
import Home from "./Pages/Home";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} /> */}
      {/* <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} /> */}
      {/* <Route path="/profile" exact component={Profile} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
