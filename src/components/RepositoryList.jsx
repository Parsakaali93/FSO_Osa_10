import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  sortSelector: {
  }
});

const SortSelector = ({onChange, order}) => {

  return (
    <View style={styles.sortSelector}>
      <Picker
        selectedValue={order.pickerDisplay}
        
        onValueChange={(itemValue) =>
          onChange(itemValue)
        }>

        <Picker.Item label="Latest Repositories" value="latest" />
        <Picker.Item label="Highest Rated Repositories" value="highest" />
        <Picker.Item label="Lowest Rated Repositories" value="lowest" />
      </Picker>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  
  const [selectedOrder, setSelectedOrder] = useState({pickerDisplay: "Latest Repositories"});

  const handleOrderChange = (itemValue) => {
    switch(itemValue)
    {
        case "latest":
          setSelectedOrder({criteria: "CREATED_AT", direction: "DESC", pickerDisplay: "latest"});
          break;

        case "highest":
          setSelectedOrder({criteria: "RATING_AVERAGE", direction: "DESC", pickerDisplay: "highest"});
          break;

        case "lowest":
          setSelectedOrder({criteria: "RATING_AVERAGE", direction: "ASC", pickerDisplay: "lowest"});
          break;
    }
    
  };

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {variables: { orderBy: selectedOrder.criteria, orderDirection: selectedOrder.direction }, fetchPolicy: 'network-only' });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching repositories: {error.message}</Text>;
  if (!data || !data.repositories || !data.repositories.edges) {
    return <Text>No data found</Text>;
  }

  const repositories = data.repositories.edges.map(e => e.node);

  return (
    <FlatList style={{backgroundColor:"#aff4fe"}}
      data={repositories}
      ListHeaderComponent={() => <SortSelector onChange={handleOrderChange} order={selectedOrder}/>}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem repository={item} singleRepoView={false} />}
    />
  );
};

export default RepositoryList;