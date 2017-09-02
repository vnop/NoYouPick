import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 20,
    borderRadius: 5,
  },
  disabledBtn: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  foodButton: {
    marginTop: 20,
    marginBottom: 20
  },
  foodGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  foodType: {
    borderWidth: 1,
    margin: 1,
    padding: 5
  },
  foodContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foodText: {
    color: 'darkgrey',
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default styles;
