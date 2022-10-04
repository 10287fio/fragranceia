import '../styles/globals.scss'
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?:(page:ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component:NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayouts = Component.getLayout ?? ((page) => page)

  return getLayouts(<Component {...pageProps} />)
}

export default MyApp
