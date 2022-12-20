
# Merge React Components into Gatsby.js

## Pure React Components
- `/page3`: is a simple react component based page. Exported directly while not rended by react-dom.
- `/page2`: is a Gatsby page, but with SEO as a React Component imported by this(/page2) Gatsby page. 
- `theme1`: is a React Component, through a `Link` to `gatsby-theme-1`.
- `theme1a`: inherits from `page2`, but with a React component import from a gatsby theme in `packages`. 

## Notes:
1. `page3` is not a Gatsby page, so under `gatsby develop` navigating between such pages will always respond with 404. Once `build` and then under `gatsby serve` will be ok.

---
<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

