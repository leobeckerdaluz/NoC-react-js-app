import { Platform, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";


// Importa as páginas a serem utilizadas
import Login_Page from './screens/Login_Page/Login_Page';
import SetupNoC_Page from './screens/SetupNoC_Page/SetupNoC_Page';
import Messages_Page from "./screens/Messages_Page/Messages_Page";
import Reports_Page from "./screens/Reports_Page/Reports_Page";


// Stack Navigator contendo a tela de login
const SignedOut = createStackNavigator(
  {
    SignUp: {
      screen: Login_Page,
      navigationOptions: {
        title: "Login In",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    },
  }
);


// Tab Navigator contendo as páginas de uso do app
const SignedIn = createBottomTabNavigator(
  {
    SetupNoC: {
      screen: SetupNoC_Page,
      navigationOptions: {
        tabBarLabel: "SetupNoC",
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="home" size={30} color={tintColor} />
        // )
      }
    },
    Messages: {
      screen: Messages_Page,
      navigationOptions: {
        tabBarLabel: "Messages_Page", 
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="user" size={30} color={tintColor} />
        // )
      }
    },
    Stats: {
      screen: Reports_Page,
      navigationOptions: {
        tabBarLabel: "Reports_Page", 
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="user" size={30} color={tintColor} />
        // )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);


// Switch Navigator contendo as 2 opções de navegação do app: Login e a TabBar
export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
            // initialRouteName: "SignedIn"
        }
    );
};