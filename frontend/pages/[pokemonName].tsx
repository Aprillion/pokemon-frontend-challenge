import type {GetServerSidePropsContext} from 'next'
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import {DETAIL} from '../apollo'
import {DetailQuery} from '../__generated__/graphql'

type Props = DetailQuery['pokemonByName']

export default function Detail() {
  const {pokemonName} = useRouter().query
  const {data} = useQuery<DetailQuery>(DETAIL, {variables: {pokemonName}})
  if (!data) return <main className="detail">Loading...</main>

  const {pokemonByName} = data
  if (!pokemonByName) return <main className="detail">¯\_(ツ)_/¯</main>

  const {image, name, types, weight, height} = pokemonByName

  return (
    // TODO: finish detail page and extract common logic with Card.tsx
    <main className="detail">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.replace(/artwork(.*)\.jpg/, 'artwork/vector$1.png')} alt="" />
      <h2>{name}</h2>
      <small>{types.join(', ')}</small>
      <div>
        <b>Weight</b>: {weight.minimum} - {weight.maximum}kg
      </div>
      <div>
        <b>Height</b>: {height.minimum} - {height.maximum}kg
      </div>
    </main>
  )
}
