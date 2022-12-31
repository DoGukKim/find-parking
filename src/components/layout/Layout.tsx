import { ReactElement, ReactNode } from 'react'
import { Header, HeaderProps } from './Header'

interface LayoutProps extends HeaderProps {
  children: ReactNode
}

export const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Header meta={meta} />
      <main>{children}</main>
    </>
  )
}

Layout.getLayout = (
  page: ReactElement,
  pageProps: Omit<LayoutProps, 'children'>
) => <Layout {...pageProps}>{page}</Layout>
