import React from 'react'
import PropTypes from 'prop-types'

import DateTime from 'components/DateTime'
import ButtonLink from 'components/ButtonLink'
import * as R from 'components/Responsive'

import * as S from './styled'

const PostHeader = ({
  image,
  date,
  timeToRead,
  title,
  description
}) => {
  return (
    <S.PostHeader>
      {image && (
        <R.GreaterThanTablet>
          <div>
            <S.PostImage fluid={image.childImageSharp.fluid} />
          </div>
        </R.GreaterThanTablet>
      )}
      <S.ButtonBack>
        <ButtonLink rel="prev" to="/experience/">
          ← Back
        </ButtonLink>
      </S.ButtonBack>
      <DateTime>
        <span itemProp="datePublished">{date}</span>
        {timeToRead && (
          <span> · Time to read: {timeToRead} min</span>
        )}
      </DateTime>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{description}</S.Subtitle>
      <S.Author>Felipe Fialho</S.Author>
    </S.PostHeader>
  )
}

PostHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object,
  timeToRead: PropTypes.number
}

export default PostHeader
