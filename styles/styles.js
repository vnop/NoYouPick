import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  foodButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  foodGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  foodType: {
    borderWidth: 1,
    margin: 1,
    padding: 5,
  },
  foodContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  fadeBack: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
