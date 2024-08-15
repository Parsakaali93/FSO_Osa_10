import { Text, FlatList } from 'react-native';
// import useRepositories from '../hooks/useRepositories';
import { ME } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import ReviewItem from './ReviewItem';

const MyReviews = () => {
    const { data, error, loading } = useQuery(ME, { variables: {includeReviews: true} });
    
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error fetching repositories: {error.message}</Text>;

    const reviews = data.me.reviews.edges;
    
    return (
      <>
        <Text>rsfsdf</Text>
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item.node} showRepoName={true}/>}
        />
     </>
    );
    
}; 

export default MyReviews; 