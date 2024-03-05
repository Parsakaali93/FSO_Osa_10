//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();

/* We also provided the storage instance for the createApolloClient function as an argument.
This is because next, we will send the access token to Apollo Server in each request. */
const apolloClient = createApolloClient(authStorage);

const App = () => {
  // console.log(Constants.expoConfig.extra);

  return (
    <> 
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
                <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style="auto" /> 
    </>
  );
}

export default App;