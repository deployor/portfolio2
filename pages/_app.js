import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3f8f134c-c1b0-4ca7-b581-78e365290810"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;