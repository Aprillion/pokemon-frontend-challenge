import {useState} from 'react'
import Head from 'next/head'
import type {AppProps} from 'next/app'
import {ApolloProvider} from '@apollo/client'
import {client, searchDefaultValues} from '../apollo'
import '../styles/globals.css'

export default function App({Component, pageProps}: AppProps) {
  // state lifted up to preserve it between navigation to pokemon detail and back
  const [searchElements, setSearchElements] = useState(searchDefaultValues)

  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <ApolloProvider client={client}>
        <Component
          {...pageProps}
          searchElements={searchElements}
          setSearchElements={setSearchElements}
        />
      </ApolloProvider>
    </>
  )
}
