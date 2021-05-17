import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../containers/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const _ = require("lodash")

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

const ReadTime = styled.small`
  display: block;
  margin-top: 0.2rem;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ol style={{ listStyle: `none`, marginLeft: 0 }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div className="blog-entry">
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <Date>{post.frontmatter.date}</Date>
                    <SimpleLink
                      to={
                        "categories/" + _.kebabCase(post.frontmatter.searchTag)
                      }
                    >
                      <Tag>{post.frontmatter.tag}</Tag>
                    </SimpleLink>
                    <ReadTime>{post.fields.readingTime.text}</ReadTime>
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tag
          searchTag
        }
      }
    }
  }
`
