/* eslint-disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddAvatarInput = {
  src?: InputMaybe<Scalars["String"]>;
};

export type AddCardInput = {
  pack?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
};

export type AddSocketInput = {
  slug?: InputMaybe<Scalars["String"]>;
  socket?: InputMaybe<Scalars["String"]>;
};

export type Avatar = {
  __typename?: "Avatar";
  id?: Maybe<Scalars["ID"]>;
  src?: Maybe<Scalars["String"]>;
};

export type AvatarInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Card = {
  __typename?: "Card";
  _id?: Maybe<Scalars["ID"]>;
  id?: Maybe<Scalars["ID"]>;
  pack?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
};

export type CardInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type CreateGameInput = {
  avatar?: InputMaybe<Scalars["ID"]>;
  host?: InputMaybe<Scalars["ID"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["ID"]>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type Game = {
  __typename?: "Game";
  discardPile?: Maybe<Array<Maybe<Card>>>;
  host?: Maybe<User>;
  id?: Maybe<Scalars["ID"]>;
  players?: Maybe<Array<Maybe<Player>>>;
  rounds?: Maybe<Array<Maybe<Round>>>;
  slug?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
};

export type GameInput = {
  slug?: InputMaybe<Scalars["String"]>;
  socket?: InputMaybe<Scalars["String"]>;
};

export type Move = {
  __typename?: "Move";
  card?: Maybe<Card>;
  id?: Maybe<Scalars["ID"]>;
  user?: Maybe<User>;
};

export type Mutations = {
  __typename?: "Mutations";
  addAvatar?: Maybe<Avatar>;
  addCard?: Maybe<Card>;
  addSocketToGame?: Maybe<Game>;
  startGame?: Maybe<StartGame>;
};

export type MutationsAddAvatarArgs = {
  input?: InputMaybe<AddAvatarInput>;
};

export type MutationsAddCardArgs = {
  input?: InputMaybe<AddCardInput>;
};

export type MutationsAddSocketToGameArgs = {
  input?: InputMaybe<AddSocketInput>;
};

export type MutationsStartGameArgs = {
  input?: InputMaybe<CreateGameInput>;
};

export type Player = {
  __typename?: "Player";
  id?: Maybe<Scalars["ID"]>;
  score?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
};

export type Queries = {
  __typename?: "Queries";
  avatar?: Maybe<Avatar>;
  avatars?: Maybe<Array<Maybe<Avatar>>>;
  card?: Maybe<Card>;
  cards?: Maybe<Array<Maybe<Card>>>;
  game?: Maybe<Game>;
  user?: Maybe<User>;
};

export type QueriesAvatarArgs = {
  input?: InputMaybe<AvatarInput>;
};

export type QueriesCardArgs = {
  input?: InputMaybe<CardInput>;
};

export type QueriesGameArgs = {
  input?: InputMaybe<GameInput>;
};

export type QueriesUserArgs = {
  input?: InputMaybe<UserInput>;
};

export type Round = {
  __typename?: "Round";
  id?: Maybe<Scalars["ID"]>;
  narrator?: Maybe<User>;
  phrase?: Maybe<Scalars["String"]>;
  readyPlayers?: Maybe<Array<Maybe<User>>>;
  table?: Maybe<Array<Maybe<Move>>>;
};

export type StartGame = {
  __typename?: "StartGame";
  game?: Maybe<Game>;
  player?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  avatar?: Maybe<Avatar>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  nickname?: Maybe<Scalars["String"]>;
};

export type UserInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type UserQueryVariables = Exact<{
  input: UserInput;
}>;

export type UserQuery = {
  __typename?: "Queries";
  user?: {
    __typename?: "User";
    id?: string | null;
    nickname?: string | null;
    email?: string | null;
    avatar?: {
      __typename?: "Avatar";
      id?: string | null;
      src?: string | null;
    } | null;
  } | null;
};

export type UserFragmentFragment = {
  __typename?: "User";
  id?: string | null;
  nickname?: string | null;
  email?: string | null;
  avatar?: {
    __typename?: "Avatar";
    id?: string | null;
    src?: string | null;
  } | null;
};

export type GameQueryVariables = Exact<{
  input: GameInput;
}>;

export type GameQuery = {
  __typename?: "Queries";
  game?: {
    __typename?: "Game";
    id?: string | null;
    slug?: string | null;
    status?: string | null;
    host?: {
      __typename?: "User";
      id?: string | null;
      nickname?: string | null;
      email?: string | null;
      avatar?: {
        __typename?: "Avatar";
        id?: string | null;
        src?: string | null;
      } | null;
    } | null;
    players?: Array<{
      __typename?: "Player";
      score?: number | null;
      user?: {
        __typename?: "User";
        id?: string | null;
        nickname?: string | null;
        email?: string | null;
        avatar?: {
          __typename?: "Avatar";
          id?: string | null;
          src?: string | null;
        } | null;
      } | null;
    } | null> | null;
    rounds?: Array<{
      __typename?: "Round";
      id?: string | null;
      phrase?: string | null;
      readyPlayers?: Array<{
        __typename?: "User";
        id?: string | null;
      } | null> | null;
      narrator?: {
        __typename?: "User";
        id?: string | null;
        nickname?: string | null;
        email?: string | null;
        avatar?: {
          __typename?: "Avatar";
          id?: string | null;
          src?: string | null;
        } | null;
      } | null;
      table?: Array<{ __typename?: "Move"; id?: string | null } | null> | null;
    } | null> | null;
  } | null;
};

export type AvatarsQueryVariables = Exact<{ [key: string]: never }>;

export type AvatarsQuery = {
  __typename?: "Queries";
  avatars?: Array<{
    __typename?: "Avatar";
    id?: string | null;
    src?: string | null;
  } | null> | null;
};

export type StartGameMutationVariables = Exact<{
  input: CreateGameInput;
}>;

export type StartGameMutation = {
  __typename?: "Mutations";
  startGame?: {
    __typename?: "StartGame";
    game?: {
      __typename?: "Game";
      id?: string | null;
      slug?: string | null;
      status?: string | null;
      host?: {
        __typename?: "User";
        id?: string | null;
        nickname?: string | null;
        email?: string | null;
        avatar?: {
          __typename?: "Avatar";
          id?: string | null;
          src?: string | null;
        } | null;
      } | null;
      players?: Array<{
        __typename?: "Player";
        score?: number | null;
        user?: {
          __typename?: "User";
          id?: string | null;
          nickname?: string | null;
          email?: string | null;
          avatar?: {
            __typename?: "Avatar";
            id?: string | null;
            src?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    player?: {
      __typename?: "User";
      id?: string | null;
      nickname?: string | null;
      email?: string | null;
      avatar?: {
        __typename?: "Avatar";
        id?: string | null;
        src?: string | null;
      } | null;
    } | null;
  } | null;
};

export type WaitingQueryVariables = Exact<{
  input: GameInput;
}>;

export type WaitingQuery = {
  __typename?: "Queries";
  game?: {
    __typename?: "Game";
    id?: string | null;
    slug?: string | null;
    status?: string | null;
    host?: {
      __typename?: "User";
      id?: string | null;
      nickname?: string | null;
      email?: string | null;
      avatar?: {
        __typename?: "Avatar";
        id?: string | null;
        src?: string | null;
      } | null;
    } | null;
    players?: Array<{
      __typename?: "Player";
      user?: {
        __typename?: "User";
        id?: string | null;
        nickname?: string | null;
        email?: string | null;
        avatar?: {
          __typename?: "Avatar";
          id?: string | null;
          src?: string | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export const UserFragmentFragmentDoc = gql`
  fragment userFragment on User {
    id
    nickname
    email
    avatar {
      id
      src
    }
  }
`;
export const UserDocument = gql`
  query User($input: UserInput!) {
    user(input: $input) {
      ...userFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const GameDocument = gql`
  query Game($input: GameInput!) {
    game(input: $input) {
      id
      slug
      status
      host {
        ...userFragment
      }
      players {
        user {
          ...userFragment
        }
        score
      }
      rounds {
        id
        phrase
        readyPlayers {
          id
        }
        narrator {
          ...userFragment
        }
        table {
          id
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGameQuery__
 *
 * To run a query within a React component, call `useGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGameQuery(
  baseOptions: Apollo.QueryHookOptions<GameQuery, GameQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GameQuery, GameQueryVariables>(GameDocument, options);
}
export function useGameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GameQuery, GameQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GameQuery, GameQueryVariables>(
    GameDocument,
    options
  );
}
export type GameQueryHookResult = ReturnType<typeof useGameQuery>;
export type GameLazyQueryHookResult = ReturnType<typeof useGameLazyQuery>;
export type GameQueryResult = Apollo.QueryResult<GameQuery, GameQueryVariables>;
export const AvatarsDocument = gql`
  query Avatars {
    avatars {
      id
      src
    }
  }
`;

/**
 * __useAvatarsQuery__
 *
 * To run a query within a React component, call `useAvatarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvatarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvatarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAvatarsQuery(
  baseOptions?: Apollo.QueryHookOptions<AvatarsQuery, AvatarsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AvatarsQuery, AvatarsQueryVariables>(
    AvatarsDocument,
    options
  );
}
export function useAvatarsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AvatarsQuery, AvatarsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AvatarsQuery, AvatarsQueryVariables>(
    AvatarsDocument,
    options
  );
}
export type AvatarsQueryHookResult = ReturnType<typeof useAvatarsQuery>;
export type AvatarsLazyQueryHookResult = ReturnType<typeof useAvatarsLazyQuery>;
export type AvatarsQueryResult = Apollo.QueryResult<
  AvatarsQuery,
  AvatarsQueryVariables
>;
export const StartGameDocument = gql`
  mutation startGame($input: CreateGameInput!) {
    startGame(input: $input) {
      game {
        id
        slug
        status
        host {
          ...userFragment
        }
        players {
          user {
            ...userFragment
          }
          score
        }
      }
      player {
        ...userFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type StartGameMutationFn = Apollo.MutationFunction<
  StartGameMutation,
  StartGameMutationVariables
>;

/**
 * __useStartGameMutation__
 *
 * To run a mutation, you first call `useStartGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startGameMutation, { data, loading, error }] = useStartGameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStartGameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    StartGameMutation,
    StartGameMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<StartGameMutation, StartGameMutationVariables>(
    StartGameDocument,
    options
  );
}
export type StartGameMutationHookResult = ReturnType<
  typeof useStartGameMutation
>;
export type StartGameMutationResult = Apollo.MutationResult<StartGameMutation>;
export type StartGameMutationOptions = Apollo.BaseMutationOptions<
  StartGameMutation,
  StartGameMutationVariables
>;
export const WaitingDocument = gql`
  query Waiting($input: GameInput!) {
    game(input: $input) {
      id
      slug
      status
      host {
        ...userFragment
      }
      players {
        user {
          ...userFragment
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useWaitingQuery__
 *
 * To run a query within a React component, call `useWaitingQuery` and pass it any options that fit your needs.
 * When your component renders, `useWaitingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWaitingQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWaitingQuery(
  baseOptions: Apollo.QueryHookOptions<WaitingQuery, WaitingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WaitingQuery, WaitingQueryVariables>(
    WaitingDocument,
    options
  );
}
export function useWaitingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<WaitingQuery, WaitingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WaitingQuery, WaitingQueryVariables>(
    WaitingDocument,
    options
  );
}
export type WaitingQueryHookResult = ReturnType<typeof useWaitingQuery>;
export type WaitingLazyQueryHookResult = ReturnType<typeof useWaitingLazyQuery>;
export type WaitingQueryResult = Apollo.QueryResult<
  WaitingQuery,
  WaitingQueryVariables
>;
