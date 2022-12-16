import '@emotion/react'

import { ColorScheme, MediaScheme, TypographyScheme } from './type'

declare module '@emotion/react' {
  export interface Theme {
    color: ColorScheme
    typography: TypographyScheme
    media: MediaScheme
  }
}
