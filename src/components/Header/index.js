import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { getActiveTheme } from 'utils/themes'

import Menu from 'components/Menu'
import Container from 'components/Container'
import ToggleTheme from 'components/ToggleTheme'

import * as S from './styled'

const Header = ({ site: { author } }) => {
  return (
    <S.Header>
      <Container>
        <S.Main>
          <AniLink
            cover
            bg={getActiveTheme()}
            direction="down"
            duration={1}
            to="/"
            title="Home">
            <S.Brand>
              <S.Title>{author}</S.Title>
            </S.Brand>
          </AniLink>
          <S.Menu>
            <Menu />
            <ToggleTheme />
          </S.Menu>
        </S.Main>
      </Container>
    </S.Header>
  )
}

Header.propTypes = {
  site: PropTypes.shape({
    author: PropTypes.string.isRequired
  })
}

export default Header
