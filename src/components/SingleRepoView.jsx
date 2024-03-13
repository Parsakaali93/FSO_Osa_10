import { StyleSheet, Text, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const SingleRepoView = () => {
    const { id } = useParams();
    console.log("id ", id)

    const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, { fetchPolicy: 'cache-and-network', variables: { repoID: id } });
    
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error fetching repositories: {error.message}</Text>;

    console.log("received data", data)

    const reviews = ["kissa", "kassi"]
    return (
      <FlatList
        data={data.repository.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item.node} showRepoName={false}/>}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem repository={data.repository} singleRepoView={true}/>}
      />
    );
};

export default SingleRepoView;