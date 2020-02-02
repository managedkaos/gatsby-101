import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0
  }
`

const Description = styled.div`
  flex:1;
  margin-left: 18px;
  padding: 12px;
`

const EventName = styled.h3`
  margin: 0 0  12px 0;
  padding: 0;
`

const EventDate = styled.p`
  margin: 0;
  padding: 0;
`

const About = props => (
  <AboutWrapper>
    <Description>
      <EventName>{props.eventName}</EventName>
      <EventDate>{props.eventDate}</EventDate>
    </Description>
  </AboutWrapper>
)
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>All About This Site</h1>
    <About
      eventName="About 1"
      eventDate="2020-01-02"
      />
    <About
      eventName="About 2"
      eventDate="2020-01-03"
      />
  </Layout>
)

export default AboutPage
