import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import NS from './src/screens/ComponentsScreen';
import Ejemplo from './src/screens/ejemplo';
import Componente from './src/screens/ejemplo33'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: NS,
    Ej: Ejemplo,
    Ejemplo33: Componente
  },
  {
    initialRouteName: 'Ejemplo33',
    defaultNavigationOptions: {
      title: 'Mi Titulo:'
    }
  }
);

export default createAppContainer(navigator);
