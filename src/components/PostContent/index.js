import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostContent = ({ children }) => {
  return (
    <S.PostContent>{ children }</S.PostContent>
  )
}

PostContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default PostContent