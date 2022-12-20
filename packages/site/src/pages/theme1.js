import React from "react";

import { Router, Link } from "@reach/router";
// import { Link } from "gatsby"

const App = ({ children }) => (
  <div>
    
    <h1> test React in Gatsyb.js! </h1>

    <nav>
      <Link to="/">Home</Link> <Link to="/theme1/dashboard">theme1</Link>
    </nav>
    <Router>
      <Home path="/" />
      <GatsbyTheme path="/theme1" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    This is generally for root index page.
    <h2> Cannot reach here. </h2>
  </div>
);

const GatsbyTheme = () => (
  <div>
    <h2> Gatsby Theme 1 </h2>
  </div>
);

// render(<App />, document.getElementById("root"));
export default App;