import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import type {SearchQueryVariables} from './__generated__/graphql'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export const TYPES = gql`
  query TYPES {
    pokemonTypes
  }
`

export const SEARCH = gql`
  query SEARCH(
    $search: String
    $type: String
    $isFavorite: Boolean
    $limit: Int = 100
    $offset: Int = 0
  ) {
    pokemons(
      query: {
        limit: $limit
        offset: $offset
        search: $search
        filter: {type: $type, isFavorite: $isFavorite}
      }
    ) {
      count
      edges {
        id
        name
        types
        isFavorite
        image
      }
    }
  }
`
export const searchDefaultValues = {
  ...({} as SearchQueryVariables), // TS overwrite of optional props
  search: '',
  type: '',
  limit: 50,
}

// prettier-ignore
export const DETAIL = gql`
  query DETAIL($pokemonName: String!) {
    pokemonByName(name: $pokemonName) {
      id
      name
      classification
      types
      fleeRate
      isFavorite
      maxCP
      maxHP
      resistant
      weaknesses
      image
      sound
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
      evolutions {
        name
        image
        isFavorite
      }
      evolutionRequirements {
        name
        amount
      }
    }
  }
`

export const FAVORITE = gql`
  mutation FAVORITE($id: ID!) {
    favoritePokemon(id: $id) {
      name
      isFavorite
    }
  }
`

export const UNFAVORITE = gql`
  mutation UNFAVORITE($id: ID!) {
    unFavoritePokemon(id: $id) {
      name
      isFavorite
    }
  }
`