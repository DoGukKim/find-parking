import styled from '@emotion/styled'
import { SVGAttributes } from 'react'

import { colorTheme } from 'src/theme/color'
import { ColorToken } from 'src/theme/type'
import { ICON_COMPONENT } from './constant'

interface IconProps
  extends Pick<SVGAttributes<SVGAElement>, 'width' | 'height'> {
  type: keyof typeof ICON_COMPONENT
  stroke?: ColorToken
  fill?: ColorToken
}
const Icon = ({
  type,
  width = 22,
  height = 22,
  stroke = 'black',
  fill,
}: IconProps) => {
  const IconComponent = ICON_COMPONENT[type]

  return (
    <Wrapper>
      <IconComponent
        width={width}
        height={height}
        stroke={colorTheme[stroke]}
        fill={!fill ? 'none' : colorTheme[fill]}
        strokeWidth="2.0"
      />
    </Wrapper>
  )
}

export default Icon

const Wrapper = styled.div``
