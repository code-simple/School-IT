import '@/src/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)  // To set layout

  return getLayout(<Component {...pageProps} />)
}
