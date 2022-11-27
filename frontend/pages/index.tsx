import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {gql} from '@apollo/client'
import client from '../apollo-client'

export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
      query {
        pokemons(query: {limit: 100, offset: 0}) {
          edges {
            name
          }
        }
      }
    `,
  })

  return {props: data}
}

export default function Home({pokemons}: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Frontend Challenge</title>
      </Head>
      <pre>{JSON.stringify(pokemons.edges, null, 2)}</pre>
    </div>
  )
}
