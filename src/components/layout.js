import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Navbar />
        <main>{children}</main>   
      <Footer />   
    </>
  )
}

export default Layout
