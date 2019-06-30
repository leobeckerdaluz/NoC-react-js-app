import React, { Component } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity} from 'react-native';
import styles from './styles';
import topology_config from './topology_config.json'
import * as firebaseFunctions from '../../components/firebaseFunctions';
// import { timingSafeEqual } from 'crypto';

export default class SetupNoC_Page extends Component {
  
  state = {
    noc_x:'',
    noc_y:'',
    selectedTop : '',
    input_file: ''
  }

  componentDidMount(){
    firebaseFunctions.initFirebase();
  }

  handleNox_x = (noc_x) =>{
    this.setState({noc_x});
    console.log(`The user type on noc_x: ${noc_x}`);
  }
  handleNox_y = (noc_y) =>{
    this.setState({noc_y});
    console.log(`The user type on noc_y: ${noc_y}`);
  }
  handleSelectTop = (selectedTop) =>{
    this.setState({selectedTop});
    console.log(`The user type on selectedTop: ${selectedTop}`);
  }
  selectedInput = (input_file) =>{
    this.setState({input_file});
    console.log(`The user type on input_file: ${input_file}`);
  }

  sendToFirebase = () =>{  
    const datas = {
      n_y: this.state.noc_x,
      topologia: this.state.selectedTop,
    }

    const path = "NoC_Setup";

    firebaseFunctions.setToFirebase(datas, path);
  }

  render() {
    return (
      <View style={ styles.container }> 
        <View style={styles.inputContainer}>                                              
          <Text>Noc X_Y:</Text>
          <TextInput style={styles.input}
            onChangeText = {(text) => this.handleNox_x(text)}
            keyboardType="numeric">
          </TextInput>
        </View>
        {/* <View style={styles.inputContainer}>
          <Text>Noc Y:</Text>
          <TextInput style={styles.input}
            onChangeText = {(text) => this.handleNox_y(text)}>
          </TextInput>
        </View> */}
        <View style={styles.inputContainer}>
          <Text>Topology:</Text>
          <Picker style={styles.input}
              selectedValue = {this.state.selectedTop}
              onValueChange={(itemValue, itemIndex) => this.handleSelectTop(itemValue)}>
              {topology_config.map( (item,index) => (<Picker.Item label={item.nome} value={item.id} key={index} />)) }
          </Picker>
        </View>
        <TouchableOpacity style={styles.inputContainer}
        onPress = {this.sendToFirebase}>
          <Text>Send</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



