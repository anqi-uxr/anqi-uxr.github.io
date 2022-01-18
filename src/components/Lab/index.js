import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import DateTime from 'components/DateTime'
import BoxHandler from 'components/BoxHandler'

import * as S from './styled'

const LabImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "lab" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const image = images.edges.find(image => {
    return image.node.relativePath === imageSrc.relativePath
  })

  return <S.Image fluid={image.node.childImageSharp.fluid} />
}

const Lab = ({ content }) => {
  return (
    <S.LabList>
      {content.map(({ node }) => {
        return (
          <S.LabItem
            key={node.id}
            href={node.path}
            title={node.title}>
            <BoxHandler>
              <LabImg imageSrc={node.imageSrc} />
              <DateTime>{node.date}</DateTime>
              <S.Title>{node.title}</S.Title>
              <S.Text>{node.description}</S.Text>
            </BoxHandler>
          </S.LabItem>
        )
      })}
    </S.LabList>
  )
}

Lab.propTypes = {
  children: PropTypes.node.isRequired
}

export default Lab
