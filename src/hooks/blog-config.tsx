import { graphql, useStaticQuery } from "gatsby"

type UseBlogConfigProps = {
  site: {
    siteMetadata: {
      social: {
        github: string
        linkedin: string
      }
      navigation: {
        title: string
        slug: string
      }[]
    }
  }
}

const useBlogConfig = () => {
  const data = useStaticQuery<UseBlogConfigProps>(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            linkedIn
          }
          navigation {
            title
            slug
          }
        }
      }
    }
  `)

  return data.site
}

export default useBlogConfig
