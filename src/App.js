import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Home from "views/Home";

const App = () => (
<BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Home {...props} />} />
    </Switch>
  </BrowserRouter>
)

export default App;