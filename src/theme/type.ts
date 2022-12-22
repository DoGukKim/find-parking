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
type ColorTokenSet<
  TColor extends Colors,
  TLightness extends ColorLightnessVariation
> = `${TColor}${TLightness}`
type ColorToken =
  | 'black'
  | ColorTokenSet<'blue', ColorLightnessVariation>
  | ColorTokenSet<'grey', ColorLightnessVariation>
  | ColorTokenSet<'green', ColorLightnessVariation>
  | ColorTokenSet<'red', ColorLightnessVariation>
  | 'white'
export type ColorScheme = Record<ColorToken, string>

type TypographyRoles = 'headline' | 'title' | 'body' | 'label'
type TypographyScale = 'large' | 'medium' | 'small'
type TypographyTokenSet<
  TRole extends TypographyRoles,
  TScale extends TypographyScale
> = `${TRole}-${TScale}`
export type TypographyToken =
  | TypographyTokenSet<'headline', 'large'>
  | TypographyTokenSet<'headline', 'medium'>
  | TypographyTokenSet<'headline', 'small'>
  | TypographyTokenSet<'title', 'large'>
  | TypographyTokenSet<'title', 'medium'>
  | TypographyTokenSet<'title', 'small'>
  | TypographyTokenSet<'body', 'large'>
  | TypographyTokenSet<'body', 'medium'>
  | TypographyTokenSet<'body', 'small'>
  | TypographyTokenSet<'label', 'large'>
  | TypographyTokenSet<'label', 'medium'>
  | TypographyTokenSet<'label', 'small'>
type TypographyStyleSheet = Record<
  'fontWeight' | 'fontSize' | 'lineHeight',
  string
>
export type TypographyScheme = Record<TypographyToken, TypographyStyleSheet>

type MediaSize = '48.00'
export type MediaScheme = `@media screen and (max-width: ${MediaSize}em)`
