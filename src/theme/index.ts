import { Theme } from '@emotion/react'

import { colorTheme } from './color'
import { mediaTheme } from './media'
import { typographyTheme } from './typography'

export const theme: Theme = {
  color: colorTheme,
  typography: typographyTheme,
  media: mediaTheme,
}
