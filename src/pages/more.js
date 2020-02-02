import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query {
            file(relativePath: { eq: "more.jpg" }) {
            childImageSharp {
                fixed(width:800) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

const MorePage = ({data}) => (
  <Layout>
    <SEO title="More" />
    <h1>Even More</h1>
    <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Even more stuff" 
    />
  </Layout>
)

export default MorePage