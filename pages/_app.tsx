import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const HEAD_KEY = 'global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key={HEAD_KEY}>MAKLs</title>
        <meta key={HEAD_KEY} name="description" content="makls site" />
        <link key={HEAD_KEY} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
