// import Constants from 'expo-constants';
import { StyleSheet, View, Text } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import SingleRepoView from './SingleRepoView';
import ReviewForm from './ReviewForm';
import RegisterForm from './RegisterForm';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {


  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
           <Route path="/" element={<RepositoryList />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/register" element={<RegisterForm />} />
           <Route path="/repos/:id" element={<SingleRepoView />} />
           <Route path="/review" element={<ReviewForm />} />
           <Route path="/myreviews" element={<MyReviews />} />
           {/*The last Route inside the Routes is for catching paths that don't match
           any previously defined path. In this case, we want to navigate to the home view.*/}
           <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;