import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../containers/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const SimpleLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const Header = styled.h1`
  margin: 0.37em 0;
`

const Tag = styled.small`
  text-transform: uppercase;
  font-weight: 600;
  color: #f7a046;
  margin-left: 1em;
`

const Date = styled.small`
  text-transform: uppercase;
  font-weight: 600;
`

const Categories = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges
  const { category } = pageContext
  console.log(data);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={"Categories - " + category} />
      <Bio />
      <ol style={{ listStyle: `none`, marginLeft: 0 }}>
        {posts.map(edge => {
          const post = edge.node
          const title = post.frontmatter.title || post.fields.slug
          return (
            <div
              style={{
                backgroundColor: "#fff",
                borderBottom: "1px solid #eee",
                margin: 0,
                padding: "1.34em 4.67em",
              }}
            >
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <Date>{post.frontmatter.date}</Date>
                    <Tag>{post.frontmatter.tag}</Tag>
                    <Header>
                      <SimpleLink to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </SimpleLink>
                    </Header>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <footer>
                    <Link to={post.fields.slug} itemProp="url">
                      Read More »
                    </Link>
                  </footer>
                </article>
              </li>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Categories

export const pageQuery = graphql`
  query categories($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tag
          }
        }
      }
    }
  }
`
