import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories (orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          ownerAvatarUrl
          name
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
        }
      }
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query GetSingleRepository($repoID: ID!) {
    repository(id: $repoID) {
      url
      id
      ownerAvatarUrl
      name
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;


export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;