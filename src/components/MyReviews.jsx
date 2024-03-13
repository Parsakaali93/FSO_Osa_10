import { StyleSheet, Text, FlatList } from 'react-native';
// import useRepositories from '../hooks/useRepositories';
import { ME } from '../graphql/queries';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const MyReviews = () => {
    const { data, error, loading } = useQuery(ME, { variables: {includeReviews: true} });
    
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error fetching repositories: {error.message}</Text>;

    const reviews = data.me.reviews.edges;
    
    return (
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item.node} showRepoName={true}/>}
     />
    );
    
}; 

export default MyReviews; 