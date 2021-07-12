import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Colors from '../Constantes/Colors';
import ProductOverViewScreen from "../screens/shop/ProductOverviewScreen";


const ProductNavigation = createStackNavigator({
  ProductOverview: ProductOverViewScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.empty,
    },
    headerTintColor: {
      backgroundColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
    },
  }
});

export default createAppContainer(ProductNavigation);