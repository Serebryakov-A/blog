import { Link } from "gatsby"
import React from "react"
import Icon from "./icons/icon"
import { cn } from "../utils/helpers"

import * as styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.branding}>
          <Link to="/">Andrey Serebryakov</Link>
        </h1>

        <button
          className={styles.toggleNavButton}
          onClick={showNav ? onHideNav : onShowNav}
        >
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/projects/">Projects</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
