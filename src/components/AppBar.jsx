import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import {Link} from 'react-router-native';
import Constants from 'expo-constants';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { useEffect, useState, useContext } from 'react';
import useSignIn from '../hooks/useSignIn';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row"
    // ...
  }, 
  navButton: {
    color: "white",
    fontSize: 24,
    margin: 20,
    fontWeight: "bold"
  }
  // ...
});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  console.log("App bar render");

  const { data } = useQuery(ME);
  console.log("data", data);
  const isUserSignedIn = (data && data.me) ? true:false

  const signOut = async () => {
      console.log("Removing access token");

      try{
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
      }

      catch(error){
        console.log("error while signing out: ", error);
      }
  }

  return (
  <View style={styles.container}>
    <ScrollView horizontal={true}>
          <Pressable><Link to="/"><Text style={styles.navButton}>Repositories</Text></Link></Pressable>
          {!isUserSignedIn && <Pressable><Link to="/signin"><Text style={styles.navButton}>Sign In</Text></Link></Pressable>}
          {isUserSignedIn && <Pressable onPress={signOut}><Text style={styles.navButton}>Sign Out</Text></Pressable>}
        <Pressable><Text style={styles.navButton}>Test</Text></Pressable>
        <Pressable><Text style={styles.navButton}>Kissa</Text></Pressable>
    </ScrollView>
  </View>
  
  )
};

export default AppBar;