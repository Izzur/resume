import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Izzur" />
    <h1>Hi people</h1>
    <h2>Work Experience</h2>
    <ul>
      <li>Sinarmas Mining
        <ul>
          <li>Developing application platform to support Healt, Safety, and Environment department</li>
          <li>Modernizing application to new cloud platform</li>
          <li>Developing internal messaging service</li>
          <li>Digitalization of procurement request process for IT assets</li>
        </ul>
      </li>
    </ul>
    <h2>Education</h2>
    <ul>
      <li>Institut Teknologi Sepuluh Nopember<br></br>Information System</li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>Programming Language<br></br>NodeJS, PHP, Java, Kotlin, Dart</li>
      <li>Framework<br></br>ExpressJS, Laravel, CodeIgniter, Flutter</li>
      <li>Database<br></br>MySQL/MariaDB, PostgreSQL, MongoDB</li>
      <li>Cloud<br></br>AWS, Google Cloud, Microsoft Azure, Heroku</li>
      <li>Web Technology<br></br>REST API, PWA, Kubernetes, Jamstack</li>
    </ul>
  </Layout>
)

export default IndexPage
