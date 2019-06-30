import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
import styles from './styles';
import msg_history from './msg_history.json';
import * as firebaseFunctions from '../../components/firebaseFunctions';

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
    
    firebaseFunctions.initFirebase();

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



  btsend = () => {
    const path = "Messages";
    var date = new Date();
    date = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const msg = {
      'src': this.state.source,
      'target': this.state.target,
      'msg': this.state.msg,
      'date': date,
    }
    
    console.log(`Will send {${this.state.source}} {${this.state.target}} to firebase ${path} date: ${date}`);
    firebaseFunctions.pushToFirebase(msg,path);
    
  }

    renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.list} onPress={() => this.selectItem(item)}>
        <Text>
          {/* {item.dt} - {item.msg} - ({item.source}) to - ({item.target}) */}
          {/* {item.dt} - {item.msg} - to - ({item.target}) */}
        </Text>
      </TouchableOpacity>
    </View>
  );
  handleSource = (source) => {
    // const source = src;
    // console.log(source);

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
          <TextInput style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => this.handleSource(text)}>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Target: </Text>
          <TextInput style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => this.handleTarget(text)}>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Message: </Text>
          <TextInput style={styles.input}
              onChangeText={(text) => this.handleMsg(text)}>
              {/* // value={this.state.msg}> */}

          </TextInput>
        </View>
        <TouchableOpacity style={styles.inputContainer}
          onPress={this.btsend}>
          <Text>Send</Text>
        </TouchableOpacity>
        {/* 
        <FlatList
          data={this.state.msgHistory}
          keyExtractor={item => (item.id).toString()}
          extraData={this.state}
          renderItem={this.renderItem}
        /> */}
      </View>
    );
  }
}