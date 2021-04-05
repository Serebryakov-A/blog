/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Header({children}) {
  return (
    <div
      sx={{
        backgroundColor: '#fff',
        margin: '0 auto',
        padding: `${rhythm(2)}`,
        paddingTop: `${rhythm(1.5)}`
      }}
    >
      <Link to={`/`}>
        <h3
          sx={{
            marginBottom: `${rhythm(2)}`,
            display: 'inline-block',
            fontStyle: 'normal',
          }}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        sx={{
          float: 'right'
        }}
      >
        About
      </Link>
      {children}
    </div>
  )
}
