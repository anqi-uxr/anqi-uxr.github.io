import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as S from './styled'

const Social = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              linkedinLink
            }
          }
        }
      }
    `
  )

  return (
    <S.Social>
      <S.SocialItem
        href={site.siteMetadata.social.linkedinLink}
        title="LinkedIn">
        <S.SocialLinkedin />
      </S.SocialItem>
    </S.Social>
  )
}

export default Social
