import React from "react"
import { Link } from "gatsby"
import useBlogConfig from "../hooks/blog-config"

const Navigation = () => {
  const { siteMetadata } = useBlogConfig()
  const navigation = siteMetadata.navigation;
  
  return (
    <React.Fragment>
      {navigation && navigation.length > 0 && (
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}>
          {navigation.map((item) => (
            <Link to={item.slug} itemProp="url">
             {item.title}
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation