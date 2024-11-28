import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  voltarButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#CD2400',
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  paymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#CD2400',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  selectedPayment: {
    backgroundColor: '#FF5733',
  },
  paymentButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 10,
  },
  confirmationContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#CD2400',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
    elevation: 6,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
