import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  creatorInfoAll:{
    display: "flex",
    flexDirection: "row",
    gap: 10,
    margin: 10
  },

  creatorInfoText:{
    display:"flex",
    flexDirection: "column",
    gap: 5
  },

  repoInfoContainer:{
    display:"flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "86%",
    marginHorizontal: "7%",
    marginTop: 10
  },

  repoInfoBox:{
    display:"flex",
    flexDirection: "column",
    alignItems:"center"  },

  repoLanguageContainer: {
    backgroundColor: "#0366d1",
    paddingVertical: 2, // Adjust padding to give some space vertically around the text
    paddingHorizontal: 5, // Adjust padding to give some space horizontally around the text
    borderRadius: 5, // Add border radius to make it visually appealing
    alignSelf: 'flex-start', // Align the container to the start of the flex container
  },

  repoLanguageText: {
    color: "white",
  }
});

function formatNumber(number) {
  if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(2);
      return `${formattedNumber}k`;
  } else {
      return number.toString();
  }
}

const RepositoryItem = ({repository}) => {
    return (
      <View style={{backgroundColor:"white", padding: 20}}>
        <View style={styles.creatorInfoAll}>
        <Image style={styles.tinyLogo} source={{uri: repository.ownerAvatarUrl}}></Image>
          <View style={styles.creatorInfoText}>
            <Text style={{ fontWeight: 'bold' }}>{repository.fullName}</Text>
            <Text style={{ fontStyle: 'italic' }}>{repository.description}</Text>
            <View style={styles.repoLanguageContainer}>
              <Text style={[styles.repoLanguageText]}>{repository.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.repoInfoContainer}>
          <View style={styles.repoInfoBox}>
            <Text style={{fontWeight:"bold"}}>{formatNumber(repository.forksCount)}</Text><Text>forks</Text>
          </View>
          <View style={styles.repoInfoBox}>
            <Text style={{fontWeight:"bold"}}>{formatNumber(repository.stargazersCount)}</Text><Text>stargazers</Text>
          </View>
          <View style={styles.repoInfoBox}>
            <Text style={{fontWeight:"bold"}}>{repository.ratingAverage}</Text><Text>rating</Text>
          </View>
          <View style={styles.repoInfoBox}>
            <Text style={{fontWeight:"bold"}}>{repository.reviewCount}</Text><Text>review count</Text>
          </View>
        </View>
      </View>
    );
  };

export default RepositoryItem