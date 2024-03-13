import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories (searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection) {
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
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews){
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              id
              fullName
            }
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