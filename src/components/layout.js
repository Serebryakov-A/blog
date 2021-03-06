import * as React from "react"
import Header from "../components/header"

const Layout = ({
  location,
  title,
  children,
  showNav,
  onHideNav,
  onShowNav,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="custom-wrapper">
      <Header
        showNav={showNav}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
      ></Header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          Copyright © {new Date().getFullYear()}, Andrey Serebryakov
        </footer>
      </div>
    </div>
  )
}

export default Layout
