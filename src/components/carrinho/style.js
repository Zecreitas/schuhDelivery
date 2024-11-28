import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#CD2400',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    itemName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    itemPrice: {
      fontSize: 18,
      color: '#CD2400',
      fontWeight: 'bold',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 20,
    },
    clearButton: {
      backgroundColor: '#CD2400',
      flex: 0.4,
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    clearButtonText: {
      fontSize: 16,
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    orderButton: {
      backgroundColor: '#CD2400',
      flex: 0.6,
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginRight: 10,
    },
    orderButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
      },
      totalText: {
        flex: 0.7,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      saldoText: {
        flex: 0.3,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#CD2400',
        textAlign: 'right',
      },
  });
  