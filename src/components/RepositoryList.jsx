import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import Text from './Text';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
   //const { repositories } = useRepositories();

  const { data, error, loading } = useQuery(GET_REPOSITORIES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  if (!data || !data.repositories || !data.repositories.edges) {
    return <Text>No data found</Text>;
  }

  // console.log(data);

  const repositories = data.repositories.edges.map(e => e.node);

    // // Get the nodes from the edges array
    // const repositoryNodes = repositories
    // ? repositories.edges.map(edge => edge.node)
    // : [];

  return (
    <FlatList style={{backgroundColor:"#aff4fe"}}
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem repository={item} />}
    />
  );
};

export default RepositoryList;