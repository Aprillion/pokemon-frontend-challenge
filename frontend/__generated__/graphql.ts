/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Attack = {
  __typename?: 'Attack';
  damage: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  favoritePokemon?: Maybe<Pokemon>;
  unFavoritePokemon?: Maybe<Pokemon>;
};


export type MutationFavoritePokemonArgs = {
  id: Scalars['ID'];
};


export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  attacks: PokemonAttack;
  classification: Scalars['String'];
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  evolutions: Array<Pokemon>;
  fleeRate: Scalars['Float'];
  height: PokemonDimension;
  id: Scalars['ID'];
  image: Scalars['String'];
  isFavorite: Scalars['Boolean'];
  maxCP: Scalars['Int'];
  maxHP: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  resistant: Array<Scalars['String']>;
  sound: Scalars['String'];
  types: Array<Scalars['String']>;
  weaknesses: Array<Scalars['String']>;
  weight: PokemonDimension;
};

export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  fast: Array<Attack>;
  special: Array<Attack>;
};

export type PokemonConnection = {
  __typename?: 'PokemonConnection';
  count: Scalars['Int'];
  edges: Array<Pokemon>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  maximum: Scalars['String'];
  minimum: Scalars['String'];
};

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  amount: Scalars['Int'];
  name: Scalars['String'];
};

export type PokemonFilterInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
  pokemonTypes: Array<Scalars['String']>;
  pokemons: PokemonConnection;
};


export type QueryPokemonByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPokemonByNameArgs = {
  name: Scalars['String'];
};


export type QueryPokemonsArgs = {
  query: PokemonsQueryInput;
};

export type Root = {
  __typename?: 'Root';
  query: Query;
};

export type TypesQueryVariables = Exact<{ [key: string]: never; }>;


export type TypesQuery = { __typename?: 'Query', pokemonTypes: Array<string> };

export type SearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type SearchQuery = { __typename?: 'Query', pokemons: { __typename?: 'PokemonConnection', count: number, edges: Array<{ __typename?: 'Pokemon', id: string, name: string, types: Array<string>, isFavorite: boolean, image: string }> } };

export type DetailQueryVariables = Exact<{
  pokemonName: Scalars['String'];
}>;


export type DetailQuery = { __typename?: 'Query', pokemonByName?: { __typename?: 'Pokemon', id: string, name: string, classification: string, types: Array<string>, fleeRate: number, isFavorite: boolean, maxCP: number, maxHP: number, resistant: Array<string>, weaknesses: Array<string>, image: string, sound: string, height: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, weight: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, attacks: { __typename?: 'PokemonAttack', fast: Array<{ __typename?: 'Attack', name: string }>, special: Array<{ __typename?: 'Attack', name: string }> }, evolutions: Array<{ __typename?: 'Pokemon', name: string, image: string, isFavorite: boolean }>, evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement', name: string, amount: number } | null } | null };

export type FavoriteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FavoriteMutation = { __typename?: 'Mutation', favoritePokemon?: { __typename?: 'Pokemon', name: string, isFavorite: boolean } | null };

export type UnfavoriteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnfavoriteMutation = { __typename?: 'Mutation', unFavoritePokemon?: { __typename?: 'Pokemon', name: string, isFavorite: boolean } | null };


export const TypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TYPES"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemonTypes"}}]}}]} as unknown as DocumentNode<TypesQuery, TypesQueryVariables>;
export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SEARCH"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isFavorite"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isFavorite"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;
export const DetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DETAIL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pokemonName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemonByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pokemonName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"fleeRate"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"maxCP"}},{"kind":"Field","name":{"kind":"Name","value":"maxHP"}},{"kind":"Field","name":{"kind":"Name","value":"resistant"}},{"kind":"Field","name":{"kind":"Name","value":"weaknesses"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"sound"}},{"kind":"Field","name":{"kind":"Name","value":"height"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum"}},{"kind":"Field","name":{"kind":"Name","value":"maximum"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minimum"}},{"kind":"Field","name":{"kind":"Name","value":"maximum"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attacks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"special"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"evolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}}]}},{"kind":"Field","name":{"kind":"Name","value":"evolutionRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<DetailQuery, DetailQueryVariables>;
export const FavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FAVORITE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favoritePokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}}]}}]}}]} as unknown as DocumentNode<FavoriteMutation, FavoriteMutationVariables>;
export const UnfavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UNFAVORITE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unFavoritePokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}}]}}]}}]} as unknown as DocumentNode<UnfavoriteMutation, UnfavoriteMutationVariables>;