import React from "react";

import { Router, Link } from "@reach/router";

const App = ({ children }) => (
  <div>
    
    <h1> test React in Gatsyb.js! </h1>

    <nav>
      <Link to="/">Home</Link> <Link to="page2">page2</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="page2" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

// render(<App />, document.getElementById("root"));
export default App;