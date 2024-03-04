import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = () => {
  console.log("Creating new Apollo Client with URI: ", Constants.expoConfig.extra.uri);

  return new ApolloClient({
    uri: Constants.expoConfig.extra.uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;