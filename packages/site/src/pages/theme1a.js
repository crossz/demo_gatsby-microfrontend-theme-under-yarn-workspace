import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Dashboard } from 'gatsby-theme-1'
import { App } from 'my-cra-app'

const SecondTheme = () => (
  <Layout>
    <Seo title="Theme two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to theme 2</p>
    <Link to="/">Go back to the homepage</Link>

    <h2> the component imported from `gatsby-theme-1` within 'packages'.</h2>
    {/* This is a non-gatsby components imported from `packages` */}
    <Dashboard />

    <h2> the component imported from pure CRA App, `my-cra-app`, within 'packages'.</h2>
    <App />

  </Layout>
)

export default SecondTheme
