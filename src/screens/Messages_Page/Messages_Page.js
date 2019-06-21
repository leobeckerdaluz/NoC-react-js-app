import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
import styles from './styles'
import msg_history from './msg_history.json'

export default class Messages_Page extends Component {

  constructor(props) {
    super(props);

    state = {
      source: '',
      target: '',
      msg: '',
      msgHistory: []
    }
  }


  componentDidMount() {
    this.setState({ msgHistory: msg_history });
  }



  selectItem = item => {
    const { source, target, msg } = item;
    this.setState({
      source,
      target,
      msg
    });

    console.log(`${source}`);
  }



  btsend() {
    const msg = {
      src: this.state.source,
      target: this.state.target,
      msg: this.state.msg
    }
    BluetoothSerial.write(msg)
      .then((res) => {
        console.log(res);
        console.log('Sucessfuly wrote to device');
        this.setState({ connected: true })
      })
      .catch((err) => console.log(err.message));
  }




  renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.list} onPress={() => this.selectItem(item)}>
        <Text>
          {item.dt} - {item.msg} - ({item.source}) to - ({item.target})
        </Text>
      </TouchableOpacity>
    </View>
  );
  handleSource = (source) => {
    // const source = src;
    this.setState({ source });
  }
  handleTarget = (target) => {
    // const target = tg;
    this.setState({ target });
  }

  handleMsg = (msg) => {
    this.setState({ msg });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Source: </Text>
          <TextInput style={styles.input}>
            <TextInput style={styles.input}
              onChangeText={(text) => this.handleSource(text)}
              value={String(this.state.source)}>
            </TextInput>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Target: </Text>
          <TextInput style={styles.input}>
            <TextInput style={styles.input}
              onChangeText={(text) => this.handleTarget(text)}
              value={String(this.state.target)}>
            </TextInput>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Message: </Text>
          <TextInput style={styles.input}>

            <TextInput style={styles.input}
              onChangeText={(text) => this.handleMsg(text)}
              value={this.state.msg}>
            </TextInput>

          </TextInput>
        </View>
        <TouchableOpacity style={styles.inputContainer}
        onPress = {btsend()}>
          <Text>Outro botão q faz alguma coisa</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.msgHistory}
          keyExtractor={item => (item.id).toString()}
          extraData={this.state}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}