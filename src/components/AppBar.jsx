import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import {Link} from 'react-router-native';
import Constants from 'expo-constants';

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
  return (
  <View style={styles.container}>
    <ScrollView horizontal={true}>
        <Pressable><Link to="/"><Text style={styles.navButton}>Repositories</Text></Link></Pressable>{/* ... */}
        <Pressable><Link to="/signin"><Text style={styles.navButton}>Sign In</Text></Link></Pressable>
        <Pressable><Text style={styles.navButton}>Test</Text></Pressable>
        <Pressable><Text style={styles.navButton}>Kissa</Text></Pressable>
    </ScrollView>
  </View>
  
  )
};

export default AppBar;