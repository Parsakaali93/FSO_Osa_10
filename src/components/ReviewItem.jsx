import { View, StyleSheet } from 'react-native';
import Text from './Text';
  
const ReviewItem = ({review}) => {

    const styles = StyleSheet.create({
        ratingCircle: {
            borderWidth: 4, // Use borderWidth instead of border
            borderColor: '#28629f', // Use borderColor instead of border
            borderRadius: 50, // No need for quotes around numbers
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            marginRight: 20,
            backgroundColor: 'white'
        },

        rating:{
            fontSize: 32
        },

        flexRow: {
            flexDirection: "row"
        },

        flexColumn: {
            flexDirection: "column",
            flex: 1
        },

        username:{
            fontWeight: 'bold'
        },

        createdAt:{
            color: 'grey'
        },

        textContainer: {

        },

        text:{

        }
        });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    // Make rating fit the circle even if it is 100
    const calculateFontSize = (rating) => {
        let baseFontSize = 32;
        
        if (rating >= 100) {
            baseFontSize = 24;
        }

        return baseFontSize;
    };

  return (
    <View style={{marginVertical: 20, padding: 20, backgroundColor: '#defafd'}}>
        <View style={styles.flexRow}>
            <View style={styles.ratingCircle}>
                <Text style={[styles.rating, { fontSize: calculateFontSize(review.rating) }]}>{review.rating}</Text>
            </View>
            <View style={styles.flexColumn}>
                <Text style={styles.username}>{review.user.username}</Text>
                <Text style={styles.createdAt}>{formatDate(review.createdAt)}</Text>
                <View style={styles.textContainer}>
                        <Text style={styles.text}>{review.text}</Text>
                </View>
            </View>
        </View>
    </View>
  );
}

export default ReviewItem;