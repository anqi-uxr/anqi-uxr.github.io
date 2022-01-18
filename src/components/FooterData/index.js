import React from 'react'

import Container from 'components/Container'

import * as S from './styled'

const FooterData = () => {
  return (
    <S.FooterData>
      <Container>
        ©{new Date().getFullYear()} Anqi Li
      </Container>
    </S.FooterData>
  )
}

export default FooterData
