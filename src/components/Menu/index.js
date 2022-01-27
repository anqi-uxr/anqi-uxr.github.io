import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import menuLinks from './content'
import * as S from './styled'
import * as V from 'styles/variables'

const Menu = () => {
  return (
    <S.Menu>
      {menuLinks.map((link, i) => (
        <AniLink
          partiallyActive={true}
          key={i}
          cover
          bg={V.Color.whiteSolid}
          direction="down"
          duration={1}
          to={link.url}
          activeClassName="active">
            {link.label}
        </AniLink>
      ))}
    </S.Menu>
  )
}

export default Menu
