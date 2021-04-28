import React from "react"
import Layout from "../containers/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Header = styled.h1`
  margin: 0.37em 0;
`

export default function About({ location, siteTitle }) {
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          margin: 0,
          padding: "1.34em 4.67em",
        }}
      >
        <header>
          <Header>
            <span itemProp="headline">Hi, I'm Andrey Serebryakov</span>
          </Header>
        </header>
        <section>
          <p>
            I wonder why you even opened this page. I must have interested you
            somehow or helped you in some way. If it is so - then this blog is
            doing its purpose. The reason why I have created blog is to store my
            ideas and discoveries that might help someone else or me at some
            point in the future. This is the storage to all of my writings on
            programming, web development, definetely self improvement and maybe
            productivity.
          </p>
          <p>
            As I'm just starting out blog content is a subject to change. I will
            showcase some of projects and some curious ideas with links to
            GitHub. It will also host some of programming guides and tutorials.
          </p>
          <p>
            There is no certain publishing schedule for now.
            <br />
            If you want to contact me directly you can use contact form which is
            not currently available.
          </p>
        </section>
      </div>
    </Layout>
  )
}
