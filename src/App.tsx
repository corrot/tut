import * as React from "react";
import { Route, Router } from "react-router-dom";
import history from "./helpers/history";
import Nav from "./components/Nav";
import Pages from "./routes/Pages";
const App = () => (
  <Router history={history}>
    <Nav />
    <Route component={Pages} />
  </Router>
);
export default App;