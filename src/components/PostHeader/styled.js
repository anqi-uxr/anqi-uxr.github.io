import styled from 'styled-components'
import Img from 'gatsby-image'

import * as V from 'styles/variables'
import * as T from 'styles/typography'

export const PostHeader = styled.header`
  &:not(:last-child) {
    margin-bottom: ${V.Space.lg};
  }
`

export const ButtonBack = styled.div`
  &:not(:first-child) {
    margin-top: ${V.Space.default};
  }

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`

export const PostImage = styled(Img).attrs({
  alt: 'Imagem de introdução',
  'aria-hidden': 'true'
})`
  display: block;
  height: 50vh;
  left: calc(-50vw + 50%);
  margin-top: -${V.Height.mainTop};
  object-fit: cover;
  position: relative;
  width: 100vw;

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }

  &:after {
    background-color: rgba(0, 0, 0, .5);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: ${V.ZIndex.default};
  }
`

export const Title = styled.h1.attrs({
  "itemProp": "name"
})`
  & {
    color: var(--primaryColor);
    font-size: 4.4rem;
    line-height: 1.1em;
  }

  &:not(:first-child) {
    margin-top: ${V.Space.sm};
  }

  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }
`

export const Subtitle = styled.h2.attrs({
  "itemProp": "description"
})`
  & {
    color: var(--secondaryColor);
    font-size: 2.4rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;
  }

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`
export const Author = styled.h3.attrs({
  "itemProp": "author"
})`
  position: absolute;
  top: -100vh;
`