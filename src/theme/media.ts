import { MaxLayoutWidth, MediaScheme } from './type'

export const MAX_LAYOUT_WIDTH: MaxLayoutWidth = '768px'
export const MEDIA_THEME: Readonly<MediaScheme> = `@media screen and (max-width: ${MAX_LAYOUT_WIDTH})`
