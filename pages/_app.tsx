import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Global } from '@emotion/react'

import { queryClient } from 'src/services/QueryClient'
import { globalStyle } from 'styles/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RecoilRoot>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
