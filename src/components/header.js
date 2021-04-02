import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              linkedin
            }
          }
        }
      }
    `
  )

  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{props.header}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to={data.site.siteMetadata.social.github}>GitHub</ListLink>
        <ListLink to={data.site.siteMetadata.social.linkedin}>LinkedIn</ListLink>
      </ul>
    </header>
  )
}
