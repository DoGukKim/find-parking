import { ReactNode } from 'react'
import { Frame } from './Frame'
import { Header, HeaderProps } from './Header'

interface LayoutProps extends HeaderProps {
  children: ReactNode
}

export const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Header meta={meta} />
      <Frame>{children}</Frame>
    </>
  )
}
