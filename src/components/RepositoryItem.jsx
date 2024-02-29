import { Text, View } from 'react-native';


/*     id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0, */

const RepositoryItem = ({repository}) => {
    return (
      <View style={{marginTop:20, marginBottom: 20}}>
        <Text style={{ fontWeight: 'bold' }}>{repository.fullName}</Text>
        <Text style={{ fontStyle: 'italic' }}>{repository.description}</Text>
        <Text>{repository.language}</Text>
        <Text>forks: {repository.forksCount}</Text>
        <Text>stargazers: {repository.stargazersCount}</Text>
        <Text>rating: {repository.ratingAverage}</Text>
        <Text>review count: {repository.reviewCount}</Text>
      </View>
    );
  };

export default RepositoryItem