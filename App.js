import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import FoodType from './screens/FoodType';
import Restaurant from './screens/Restaurant';
import FlipIt from './screens/FlipIt';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  FoodType: { screen: FoodType },
  Restaurants: { screen: Restaurant },
  Flip: { screen: FlipIt },
});

export default App;
