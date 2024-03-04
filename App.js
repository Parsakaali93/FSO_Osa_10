//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();
// const HelloWorld = () => {
//   return <Text>Hello world!</Text>;};

//   const PressableText = props => {
//     return (
//       <Pressable
//         onPress={() => Alert.alert('You pressed the text!')}
//       >
//         <Text>You can press me</Text>
//       </Pressable>
//     );
//   };

export default function App() {
  console.log(Constants.expoConfig.extra);

  return (
    <> 
      <NativeRouter>
      <ApolloProvider client={apolloClient}>
            <Main />
      </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" /> 
    </>
  );
}