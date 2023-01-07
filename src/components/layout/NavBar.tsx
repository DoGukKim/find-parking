import styled from '@emotion/styled'

import { MAX_LAYOUT_WIDTH } from 'src/theme/media'
import Icon from 'src/components/icon/Icon'

export const NavBar = () => {
  return (
    <Navigation role="navigation">
      <IconWrapper>
        <Icon type="MapPin" />
        <Icon type="MapPin" />
        <Icon type="MapPin" />
        <Icon type="MapPin" />
      </IconWrapper>
    </Navigation>
  )
}

const Navigation = styled('nav')(({ theme: { color } }) => ({
  position: 'fixed',
  width: '100%',
  height: 60,
  maxWidth: MAX_LAYOUT_WIDTH,
  bottom: 0,
  border: `1px solid ${color.grey200}`,
  borderWidth: '1px 1px 0px 1px',
  borderRadius: '4em 4em 0em 0em',
}))

const IconWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifySelf: 'center',
  width: '100%',
  height: '100%',
  ' > div': {
    justifySelf: 'center',
    alignSelf: 'center',
  },
}))
