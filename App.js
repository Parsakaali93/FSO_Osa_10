//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';

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
  return (
    <> 
      <NativeRouter>
            <Main />
      </NativeRouter>
      <StatusBar style="auto" /> 
    </>
  );
}