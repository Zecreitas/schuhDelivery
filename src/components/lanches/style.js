import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAFB',
      paddingHorizontal: 15,
      paddingTop: 10,
    },
    card: {
      backgroundColor: '#FFF',
      borderRadius: 15,
      padding: 15,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
      borderWidth: 0.5,
      borderColor: '#E5E7EB',
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 15,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: 8,
      textAlign: 'center',
    },
    cardPrice: {
      fontSize: 20,
      color: '#CD2400',
      marginBottom: 10,
      fontWeight: 'bold',
    },
    cardDescription: {
      fontSize: 16,
      color: '#6B7280',
      marginBottom: 10,
      textAlign: 'center',
    },
    cardDetails: {
      fontSize: 16,
      color: '#4B5563',
      marginBottom: 5,
      textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#CD2400',
        width: '40%',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
      },
      iconStyle: {
        marginRight: -5,
      },
    addButtonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: '600',
    },
    emptyText: {
      textAlign: 'center',
      color: '#9CA3AF',
      fontSize: 16,
      marginTop: 20,
    },
  });
  

export default styles;
