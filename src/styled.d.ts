import 'styled-components'
import { Theme } from './assets/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
