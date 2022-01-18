import React from 'react'
import PropTypes from 'prop-types'

import { getActiveTheme } from 'utils/themes'
import DateTime from 'components/DateTime'
import BoxHandler from 'components/BoxHandler'

import * as S from './styled'

const BlogItem = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  isMini
}) => {
  return (
    <S.BlogItem
      to={`/${slug}`}
      cover
      direction="down"
      duration={1}
      title={title}
      bg={getActiveTheme()}>
      <BoxHandler>
        {date && (
          <DateTime>
            {date}
            {timeToRead && (
              <span> · Time to read: {timeToRead} min</span>
            )}
          </DateTime>
        )}
        <S.Title isMini={isMini}>{title}</S.Title>
        {description && (
          <S.Subtitle>{description}</S.Subtitle>
        )}
      </BoxHandler>
    </S.BlogItem>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  description: PropTypes.string,
  isMini: PropTypes.bool
}

export default BlogItem
