import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({repositories}) => {

  return (
    <FlatList style={{backgroundColor:"#aff4fe"}}
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem testID='repositoryItem' repository={item} />}
    />
  );
};

export default RepositoryList;