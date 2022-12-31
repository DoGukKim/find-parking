import { StringDashString } from 'src/shared/type'

export type Colors = 'black' | 'blue' | 'grey' | 'green' | 'red' | 'white'
type ColorLightnessVariation =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

type ColorToken =
  | `${Exclude<Colors, 'black' | 'white'>}${ColorLightnessVariation}`
  | Extract<Colors, 'black' | 'white'>

export type ColorScheme = Record<ColorToken, string>

type TypographyRoles = 'headline' | 'title' | 'body' | 'label'
type TypographyScale = 'large' | 'medium' | 'small'
export type TypographyToken = StringDashString<TypographyRoles, TypographyScale>

type TypographyStyleSheet = Record<
  'fontWeight' | 'fontSize' | 'lineHeight',
  string
>
export type TypographyScheme = Record<TypographyToken, TypographyStyleSheet>

export type MaxLayoutWidth = '768px'
export type MediaScheme = `@media screen and (max-width: ${MaxLayoutWidth})`
