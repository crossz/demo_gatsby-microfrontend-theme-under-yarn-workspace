import React from 'react';
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import One from '../../components/one'

const Home = () => <p> Theme1 Dashboard </p>

const Dashboard = () => <div>
    <h1>Gatsby Theme - Dashboard</h1>
    <nav>
        <Link to="/"> Root </Link>
        <Link to="/theme1/dashboard"> Theme Dashboard </Link>
        {/* <Link to="one"> Page One </Link> */}
        <Link to="/theme1/dashboard/one"> Theme Router One </Link>
    </nav>
    <Router>
        <Home path="/theme1/dashboard" />
        <One path="/theme1/dashboard/one" />
    </Router>
    </div>;


export default Dashboard;
