/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query TYPES {\n    pokemonTypes\n  }\n": types.TypesDocument,
    "\n  query SEARCH(\n    $search: String\n    $type: String\n    $isFavorite: Boolean\n    $limit: Int = 100\n    $offset: Int = 0\n  ) {\n    pokemons(\n      query: {\n        limit: $limit\n        offset: $offset\n        search: $search\n        filter: {type: $type, isFavorite: $isFavorite}\n      }\n    ) {\n      count\n      edges {\n        id\n        name\n        types\n        isFavorite\n        image\n      }\n    }\n  }\n": types.SearchDocument,
    "\n  query DETAIL($pokemonName: String!) {\n    pokemonByName(name: $pokemonName) {\n      id\n      name\n      classification\n      types\n      fleeRate\n      isFavorite\n      maxCP\n      maxHP\n      resistant\n      weaknesses\n      image\n      sound\n      height {\n        minimum\n        maximum\n      }\n      weight {\n        minimum\n        maximum\n      }\n      attacks {\n        fast {\n          name\n        }\n        special {\n          name\n        }\n      }\n      evolutions {\n        name\n        image\n        isFavorite\n      }\n      evolutionRequirements {\n        name\n        amount\n      }\n    }\n  }\n": types.DetailDocument,
    "\n  mutation FAVORITE($id: ID!) {\n    favoritePokemon(id: $id) {\n      name\n      isFavorite\n    }\n  }\n": types.FavoriteDocument,
    "\n  mutation UNFAVORITE($id: ID!) {\n    unFavoritePokemon(id: $id) {\n      name\n      isFavorite\n    }\n  }\n": types.UnfavoriteDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TYPES {\n    pokemonTypes\n  }\n"): (typeof documents)["\n  query TYPES {\n    pokemonTypes\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SEARCH(\n    $search: String\n    $type: String\n    $isFavorite: Boolean\n    $limit: Int = 100\n    $offset: Int = 0\n  ) {\n    pokemons(\n      query: {\n        limit: $limit\n        offset: $offset\n        search: $search\n        filter: {type: $type, isFavorite: $isFavorite}\n      }\n    ) {\n      count\n      edges {\n        id\n        name\n        types\n        isFavorite\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  query SEARCH(\n    $search: String\n    $type: String\n    $isFavorite: Boolean\n    $limit: Int = 100\n    $offset: Int = 0\n  ) {\n    pokemons(\n      query: {\n        limit: $limit\n        offset: $offset\n        search: $search\n        filter: {type: $type, isFavorite: $isFavorite}\n      }\n    ) {\n      count\n      edges {\n        id\n        name\n        types\n        isFavorite\n        image\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DETAIL($pokemonName: String!) {\n    pokemonByName(name: $pokemonName) {\n      id\n      name\n      classification\n      types\n      fleeRate\n      isFavorite\n      maxCP\n      maxHP\n      resistant\n      weaknesses\n      image\n      sound\n      height {\n        minimum\n        maximum\n      }\n      weight {\n        minimum\n        maximum\n      }\n      attacks {\n        fast {\n          name\n        }\n        special {\n          name\n        }\n      }\n      evolutions {\n        name\n        image\n        isFavorite\n      }\n      evolutionRequirements {\n        name\n        amount\n      }\n    }\n  }\n"): (typeof documents)["\n  query DETAIL($pokemonName: String!) {\n    pokemonByName(name: $pokemonName) {\n      id\n      name\n      classification\n      types\n      fleeRate\n      isFavorite\n      maxCP\n      maxHP\n      resistant\n      weaknesses\n      image\n      sound\n      height {\n        minimum\n        maximum\n      }\n      weight {\n        minimum\n        maximum\n      }\n      attacks {\n        fast {\n          name\n        }\n        special {\n          name\n        }\n      }\n      evolutions {\n        name\n        image\n        isFavorite\n      }\n      evolutionRequirements {\n        name\n        amount\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation FAVORITE($id: ID!) {\n    favoritePokemon(id: $id) {\n      name\n      isFavorite\n    }\n  }\n"): (typeof documents)["\n  mutation FAVORITE($id: ID!) {\n    favoritePokemon(id: $id) {\n      name\n      isFavorite\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UNFAVORITE($id: ID!) {\n    unFavoritePokemon(id: $id) {\n      name\n      isFavorite\n    }\n  }\n"): (typeof documents)["\n  mutation UNFAVORITE($id: ID!) {\n    unFavoritePokemon(id: $id) {\n      name\n      isFavorite\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;