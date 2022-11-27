import {useRef, FormEvent, Dispatch, SetStateAction} from 'react'
import {useQuery} from '@apollo/client'
import type {TypesQuery, SearchQuery} from '../__generated__/graphql'
import {TYPES, SEARCH, searchDefaultValues} from '../apollo'
import Card from '../components/Card'

type Props = {
  searchElements: typeof searchDefaultValues
  setSearchElements: Dispatch<SetStateAction<typeof searchDefaultValues>>
}

// TODO: use project library for debounce
let debounceTimeout = -1
const debounce =
  (fn: Function, delay = 200) =>
  (...args: any[]) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = window.setTimeout(() => fn(...args), delay)
  }

export default function Home({searchElements, setSearchElements}: Props) {
  const {data: types} = useQuery<TypesQuery>(TYPES)
  const {data: search, previousData: previousSearch} = useQuery<SearchQuery>(SEARCH, {
    variables: searchElements,
  })
  const formRef = useRef(null)
  console.log(search)

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    const data = formRef.current
      ? Object.fromEntries(new FormData(formRef.current).entries())
      : undefined
    setSearchElements((current) => ({...current, ...data}))
  }

  return (
    <main>
      <h1>Pokemons</h1>

      <form
        // TODO: handle no-JS
        ref={formRef}
        onSubmit={handleSearch}
      >
        <input
          placeholder="Search"
          name="search"
          defaultValue={searchElements.search}
          onChange={debounce(handleSearch)}
        />
        <select name="type" defaultValue={searchElements.type} onChange={handleSearch}>
          <option></option>
          <option value="" disabled selected>
            Type
          </option>
          {types?.pokemonTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </form>

      <div className="results">
        {(search ?? previousSearch)?.pokemons.edges.map((props) => (
          <Card key={props.name} {...props} />
        ))}
      </div>

      {(search?.pokemons.count ?? 0) > (searchElements.limit ?? 0) && (
        // temporary solution to load more during prototyping
        // TODO: infinite scroll
        <div>
          Showing {searchElements.limit} of {search?.pokemons.count} pokemons{' '}
          <button
            onClick={() =>
              setSearchElements((current) => {
                console.log(current)
                return {...current, limit: (current.limit ?? 0) + searchDefaultValues.limit}
              })
            }
          >
            Load more
          </button>
        </div>
      )}
    </main>
  )
}
