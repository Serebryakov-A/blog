import { Link } from "gatsby"
import React from "react"
import useBlogConfig from "../hooks/blog-config"

const HeaderExternalLinks = () => {
    const { siteMetadata } = useBlogConfig();
    const social = siteMetadata.social;
    
  
    return (
      <React.Fragment>
        {social && social.length > 0 && (
          <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
            {social.map((link) => (
              <Link key={link.url} to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </React.Fragment>
    )
  }
  
  export default HeaderExternalLinks