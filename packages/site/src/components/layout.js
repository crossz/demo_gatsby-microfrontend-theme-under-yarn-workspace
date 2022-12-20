/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const NavBar = () => (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/page2"> Gatsby Page2 </Link>
      <Link to="/page3"> React Page3 </Link>
      <Link to="/theme1"> Gatsby Theme1 </Link>
      <Link to="/theme2"> Gatsby Theme2! </Link>
    </nav>
  );

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <main style={pageStyles}>
        <NavBar />
      </main>
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
