import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
    </>
  )
}
