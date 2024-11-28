import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  price: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#CD2400',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: '#555',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 17,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#CD2400',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    width: '70%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#CD2400',
  },
  
});

export default styles;
