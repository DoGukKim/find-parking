import { ReactNode } from 'react'
import styled from '@emotion/styled'

import { MAX_LAYOUT_WIDTH } from 'src/theme/media'

type FrameProps = {
  children: ReactNode
}

export const Frame = ({ children }: FrameProps) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled('div')(({ theme: { media } }) => ({
  width: '100%',
  height: '100%',
  maxWidth: MAX_LAYOUT_WIDTH,
  margin: '0 auto',
  [media]: {
    // TODO: add padding
  },
}))
