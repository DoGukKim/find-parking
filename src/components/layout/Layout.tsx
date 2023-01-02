import { ReactElement, ReactNode } from 'react'
import { Frame } from './Frame'
import { Header, HeaderProps } from './Header'

interface LayoutProps extends HeaderProps {
  children: ReactNode
}

type GetLayoutProps = {
  page: ReactElement
  pageProps: Omit<LayoutProps, 'children'>
}

export const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Header meta={meta} />
      <Frame>{children}</Frame>
    </>
  )
}

Layout.getLayout = ({ page, pageProps }: GetLayoutProps) => (
  <Layout {...pageProps}>{page}</Layout>
)
