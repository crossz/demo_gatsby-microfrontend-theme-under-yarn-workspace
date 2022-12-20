import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Dashboard } from 'gatsby-theme-1'

const SecondTheme = () => (
  <Layout>
    <Seo title="Theme two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to theme 2</p>
    <Link to="/">Go back to the homepage</Link>

    {/* This is a non-gatsby components imported from `packages` */}
    <Dashboard />

  </Layout>
)

export default SecondTheme
