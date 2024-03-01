import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e"
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
  return <View style={styles.container}><Pressable><Text style={styles.navButton}>Repositories</Text></Pressable>{/* ... */}</View>;
};

export default AppBar;