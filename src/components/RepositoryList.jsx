import { FlatList, View, StyleSheet, Text, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  sortSelector: {
  }
});

const SortSelector = ({onChange, order, filter, onFilterChange}) => {
  const textInputRef = useRef(null);

  useEffect(() => {
    if (textInputRef.current && filter != '') {
      textInputRef.current.focus();
    }
  }, [filter]); 

  return (
    <View style={styles.sortSelector}>
      <View style={{display: "flex", alignItems: "center", marginVertical: 20}}>
        <TextInput ref={textInputRef} onChangeText={onFilterChange} placeholder='Filter Repositories' value={filter} style={{borderRadius: 10, padding:10, height: 50, backgroundColor:"white", width: "90%"}}>
        </TextInput>
      </View>

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
  const [filter, setFilter] = useState("");
  const [filterDebounced] = useDebounce(filter, 800);

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

  const handleFilterChange = (itemValue) => {
       setFilter(itemValue);
  };

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {variables: { searchKeyword: filterDebounced, orderBy: selectedOrder.criteria, orderDirection: selectedOrder.direction }, fetchPolicy: 'network-only' });

  if (loading) return <View style={{backgroundColor:"#aff4fe"}}></View>;
  if (error) return <Text>Error fetching repositories: {error.message}</Text>;
  if (!data || !data.repositories || !data.repositories.edges) {
    return <Text>No data found</Text>;
  }

  const repositories = data.repositories.edges.map(e => e.node);

  return (
    <FlatList style={{backgroundColor:"#aff4fe"}}
      data={repositories}
      ListHeaderComponent={<SortSelector onFilterChange={handleFilterChange} filter={filter} onChange={handleOrderChange} order={selectedOrder}/>}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem repository={item} singleRepoView={false} />}
    />
  );
};

export default RepositoryList;