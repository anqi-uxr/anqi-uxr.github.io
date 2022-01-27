import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import * as V from 'styles/variables'

const ButtonLink = ({ children, to }) => {
  return (
    <S.ButtonLink
      to={to}
      cover
      direction="down"
      duration={1}
      bg={V.Color.whiteSolid}>
      { children }
    </S.ButtonLink>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired
}

export default ButtonLink

