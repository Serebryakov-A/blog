import { Link } from "gatsby"
import React from "react"

const HeaderTitle = () => {
    // const { siteTitle } = useSiteMetadata()
    // const { basePath } = useMinimalBlogConfig()
  
    return (
      <Link
        to={(`/${location.pathname}`)}
        sx={{ color: `heading`, textDecoration: `none` }}
      >
        <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>Andrey Serebryakov</div>
      </Link>
    )
  }
  
  export default HeaderTitle
