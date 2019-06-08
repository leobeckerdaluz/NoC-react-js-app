import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Platform, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

import SetupNoC from './pages/SetupNoC';
import LoginPage from './pages/LoginPage';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const SignedOut = createStackNavigator(
  {
    SignUp: {
      screen: LoginPage,
      navigationOptions: {
        title: "Sign Up",
        headerStyle
      }
    },
    // SignIn: {
    //   screen: Page2,
    //   navigationOptions: {
    //     title: "Sign In",
    //     headerStyle
    //   }
    // }
  }
);

const SignedIn = createBottomTabNavigator(
  {
    SetupNoC: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: "SetupNoC",
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="home" size={30} color={tintColor} />
        // )
      }
    },
    Messages: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: "Messages", 
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="user" size={30} color={tintColor} />
        // )
      }
    },
    Stats: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: "Stats", 
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
            // initialRouteName: signedIn ? "SignedIn" : "SignedOut"
            initialRouteName: "SignedIn"
        }
    );
};