import { ReactNode } from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { globalStyle } from './globalStyle'
import { theme } from '.'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </>
  )
}

export default ThemeProvider
