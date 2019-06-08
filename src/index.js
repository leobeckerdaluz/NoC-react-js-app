
import React from "react";
// import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth";
// import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null;
        }

        // const Layout = createRootNavigator(signedIn);
        // return <Layout />;

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, world777!</Text>
            </View>
        );
    }
}