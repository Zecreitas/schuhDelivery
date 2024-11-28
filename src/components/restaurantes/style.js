import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    nav: {
        width: '100%',
        height: 60,
        backgroundColor: '#281511',
    },
    user: {
        alignSelf: 'center',
        marginLeft: 340,
        marginTop: 0.5,
    },
    userText: {
        color: 'white',
        fontSize: 12,
        marginTop: -5,
        marginLeft: 1,
    },
    container: {

    },
    columnWrapper: {
      justifyContent: 'space-between', 
    },
    restaurantCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      marginBottom: 20,
      padding: 15,
      flex: 0.48,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
    rating: {
      fontSize: 16,
      color: '#CD2400',
      marginTop: 5,
      fontWeight: 'bold',

    },
    description: {
      fontSize: 15,
      color: '#555',
      marginTop: 5,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 26,
      color: '#CD2400',
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 15,
    },
  });

  export default styles