import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>All About This Site</h1>
    <Link to="/about">Go to the "About" page.</Link>
  </Layout>
)

export default AboutPage
