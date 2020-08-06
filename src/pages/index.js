import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello,</h1>
        <h1>
          I'm Geysirrr, a full-stack developer living in beautiful seoul in
          south-korea
        </h1>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
