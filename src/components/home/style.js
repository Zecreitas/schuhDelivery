import {StyleSheet} from 'react-native';

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
    sectionTitle: {
      fontSize: 26,
      color: '#CD2400',
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 15,
    },
    row: {
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 20,
      width: '48%',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    
    cardImage: {
      width: '100%',
      height: 100,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10
    },
    cardContent: {
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 5,
      textAlign: 'center',
    },
    cardPrice: {
      fontSize: 14,
      color: '#CD2400',
      marginBottom: 10,
      fontWeight: 'bold',
    },
    addButton: {
      backgroundColor: '#CD2400',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
    },
    addButtonText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  

export default styles