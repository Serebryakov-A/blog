import React from "react"
import HeaderTitle from '../components/header-title'
import Navigation from '../components/navigation'
import HeaderExternalLinks from '../components/header-external-links'
import { Flex } from "@theme-ui/components"

export default function Header() {
  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation />
        <HeaderExternalLinks />
      </div>
    </header>
  )
}
