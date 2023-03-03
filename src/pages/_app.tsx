import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from "styled-components"
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: black;
  }
  ol, ul {
    list-style: none;
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <Head>
          <meta key="charset" name="charset" content="utf-8" />
          <meta
              key="viewport"
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
  )
}
export default MyApp