import type {GetServerSidePropsContext} from 'next'
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import {DETAIL} from '../apollo'
import {DetailQuery} from '../__generated__/graphql'

export default function Detail() {
  const {pokemonName} = useRouter().query
  const {data} = useQuery<DetailQuery>(DETAIL, {variables: {pokemonName}})
  const pokemon = data?.pokemonByName

  return (
    // TODO: finish detail page
    <div>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  )
}
