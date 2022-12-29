import { ElementType, ReactNode } from 'react'
import styled from '@emotion/styled'

import { TypographyToken } from 'src/theme/type'
import { typographyTheme } from 'src/theme/typography'

type TypoProps = {
  as?: ElementType
  children: ReactNode
  role: TypographyToken
}

const Typo = ({ as, children, role }: TypoProps) => {
  return (
    <Text as={as} role={role}>
      {children}
    </Text>
  )
}

export default Typo

const Text = styled('p')<TypoProps>(({ role }) => ({
  ...typographyTheme[role],
}))
