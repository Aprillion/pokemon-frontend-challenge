import {MouseEvent} from 'react'
import {useMutation} from '@apollo/client'
import type {
  SearchQuery,
  FavoriteMutation,
  FavoriteMutationVariables,
} from '../__generated__/graphql'
import {SEARCH, FAVORITE, UNFAVORITE} from '../apollo'
import Link from 'next/link'

type Props = SearchQuery['pokemons']['edges'][number]

const typesToAlignTop = new Set(['Flying', 'Dragon', 'Bug', 'Ghost'])

export default function Card({id, name, image, types, isFavorite}: Props) {
  const [toggle] = useMutation<FavoriteMutationVariables>(isFavorite ? UNFAVORITE : FAVORITE, {
    variables: {id},
    refetchQueries: [SEARCH],
  })

  const alignTop = types.some((t) => typesToAlignTop.has(t))

  const handleToggle = (e: MouseEvent) => {
    e.preventDefault()
    toggle()
  }

  return (
    <Link href={name} className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        // TODO: update backend to use transparent pictures
        src={image.replace(/artwork(.*)\.jpg/, 'artwork/vector$1.png')}
        alt=""
        className={alignTop ? 'alignTop' : undefined}
      />
      <div>
        <div>
          <b>{name}</b>
          <small>{types.join(', ')}</small>
        </div>
        <button className="invisible" onClick={handleToggle}>
          {isFavorite // TODO: use component library for icons
            ? '🧡'
            : '🖤'}
        </button>
      </div>
    </Link>
  )
}
