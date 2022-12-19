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
      <Dashboard path="page3" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    This is generally for root index page.
    <h2> Cannot reach here. </h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2> Dashboard for Page3 </h2>
  </div>
);

// render(<App />, document.getElementById("root"));
export default App;