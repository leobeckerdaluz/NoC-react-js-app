// import React from "react";
// import { Platform, StatusBar } from "react-native";
// import {
//   StackNavigator,
//   TabNavigator,
//   SwitchNavigator
// } from "react-navigation";
// import { FontAwesome } from "react-native-vector-icons";

// import SignUp from "./screens/SignUp";
// import SignIn from "./screens/SignIn";
// import Home from "./screens/Home";
// import Profile from "./screens/Profile";

// const headerStyle = {
//   marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
// };

// export const SignedOut = createStackNavigator({
//   SignUp: {
//     screen: SignUp,
//     navigationOptions: {
//       title: "Sign Up",
//       headerStyle
//     }
//   },
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: {
//       title: "Sign In",
//       headerStyle
//     }
//   }
// });

// export const SignedIn = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="home" size={30} color={tintColor} />
//         )
//       }
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         tabBarLabel: "Profile", 
//         tabBarIcon: ({ tintColor }) => (
//           <FontAwesome name="user" size={30} color={tintColor} />
//         )
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       style: {
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//       }
//     }
//   }
// );

// export const createRootNavigator = (signedIn = false) => {
//   return createSwitchNavigator(
//     {
//       SignedIn: {
//         screen: SignedIn
//       },
//       SignedOut: {
//         screen: SignedOut
//       }
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//     }
//   );
// };

















// import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
// import SetupNoC from './pages/SetupNoC';
// import LoginPage from './pages/LoginPage';

// const AppNavigator = createBottomTabNavigator(
//   {
//     'Login':{
//       screen: LoginPage,
//       navigationOptions:{
//         tabBarVisible: false
//       }
//     },
//     'Main':{
//       screen: SetupNoC,
//       navigationOptions:{
//         title: 'Setup NoC',
//         headerTitleStyle:{
//           textAlign:'left',
//           fontSize: 30,
//           color: 'orange',
//         }
//       }
//     }
//   },
//   {
//     defaultNavigationOptions: {
//       title: 'séndy',
//       // headerTintColor: 'white',
//       headerStyle: {
//         backgroundColor: 'green',
//         borderBottomColor: 'black',
//       },
//       headerTitleStyle:{
//         color: 'white',
//         fontSize: 20,
//         flexGrow: 1,
//         textAlign: 'center',
//       }
//     }
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;
