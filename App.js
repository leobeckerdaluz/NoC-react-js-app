import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import SetupNoC from './src/pages/SetupNoC';
import LoginPage from './src/pages/LoginPage';

const AppNavigator = createBottomTabNavigator(
  {
    'Login':{
      screen: LoginPage,
      navigationOptions:{
        tabBarVisible: false
      }
    },
    'Main':{
      screen: SetupNoC,
      navigationOptions:{
        title: 'Setup NoC',
        headerTitleStyle:{
          textAlign:'left',
          fontSize: 30,
          color: 'orange',
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      title: 'séndy',
      // headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green',
        borderBottomColor: 'black',
      },
      headerTitleStyle:{
        color: 'white',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center',
      }
    }
  }
);

// const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;