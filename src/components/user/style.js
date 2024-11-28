import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#CD2400',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  copiedMessage: {
    color: 'green',
    marginTop: 10,
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: "#CD2400",
    width: 160,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    elevation: 5,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logout: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
  voltarButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
});

export default styles;
