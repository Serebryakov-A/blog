import { graphql, useStaticQuery } from "gatsby"

type UseBlogConfigProps = {
  site: {
    siteMetadata: {
      social: {
        name: string
        url: string
      }[]
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
            name
            url
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
