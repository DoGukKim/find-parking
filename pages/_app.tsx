import { ReactElement, ReactNode } from 'react'
import type { AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from 'src/services/reactQuery/QueryClient'
import ThemeProvider from 'src/theme/ThemeProvider'

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement, pageProps: AppInitialProps) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RecoilRoot>
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />, pageProps)}
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}
