import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
import styles from './styles'
import msg_history from './msg_history.json'
export default class Messages_Page extends Component {
  
  constructor(props){
    super(props);

    this.state= {
      source:'',
      target:'',
      msg: '',
      msgHistory: []
    }
  }


  componentDidMount(){
    this.setState({msgHistory: msg_history});
  }



  selectItem = item => {
    console.log(`dsajoijdsaoijdsa ${item}`);
    this.setState({source: item.source.toString(), target: item.target.toString(), msg: item.msg});
  }

  renderItem = ({item}) => (
    <View>
      <TouchableOpacity style={styles.list} onPress={() => this.selectItem(item)}>
        <Text>
          {item.dt} - {item.msg} - ({item.source}) to - ({item.target})
        </Text>
      </TouchableOpacity>
    </View>    
  );
  handleSource = (source) =>{
    // const source = src;
    this.setState({source});
  }
  handleTarget = (target) =>{
    // const target = tg;
    this.setState({target});
  }

  handleMsg = (msg) =>{
    this.setState({msg});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Source: </Text>
          <TextInput style={styles.input}>
            <TextInput style={styles.input}
              onChangeText = {(text) => this.handleSource(text)}
              // value = {this.state.source}>
            >
            </TextInput>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Target: </Text>
          <TextInput style={styles.input}>
            <TextInput style={styles.input}
              onChangeText = {(text) => this.handleTarget(text)}
              value = {this.state.target}>
              
            </TextInput>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Message: </Text>
          <TextInput style={styles.input}>

            <TextInput style={styles.input}
              onChangeText = {(text) => this.handleMsg(text)}
              value = {this.state.msg}>
            </TextInput>
            
          </TextInput>
        </View>
        <TouchableOpacity style={styles.inputContainer}>
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