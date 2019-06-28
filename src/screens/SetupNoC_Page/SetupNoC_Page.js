import React, { Component } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity} from 'react-native';
import styles from './styles';
import topology_config from './topology_config.json'


export default class SetupNoC_Page extends Component {
  
  state = {
    noc_x:'',
    noc_y:'',
    selectedTop : '',
    input_file: ''
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

  render() {
    return (
      <View style={ styles.container }> 
        <View style={styles.inputContainer}>                                              
          <Text>Noc X:</Text>
          <TextInput style={styles.input}
            onChangeText = {(text) => this.handleNox_x(text)}>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text>Noc Y:</Text>
          <TextInput style={styles.input}
            onChangeText = {(text) => this.handleNox_y(text)}>
          </TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text>Topology:</Text>
          <Picker style={styles.input}
              selectedValue = {this.state.selectedTop}
              onValueChange={(itemValue, itemIndex) => this.handleSelectTop(itemValue)}>
              {topology_config.map( (item,index) => (<Picker.Item label={item.nome} value={item.id} key={index} />)) }
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text>Report Input File Type:</Text>
          <TextInput style={styles.input}
            onChangeText = {(text) => this.selectedInput(text)}>
          </TextInput>
        </View>
        <TouchableOpacity style={styles.inputContainer}>
          <Text>Botão q faz alguma coisa</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



// export default class SetupNoC_Page extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Página de Setup!</Text>
//       </View>
//     );
//   }
// }

// import React from 'react-native';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import HabitosJson from '../../habitos';

// export default class SetupNoC extends React.Component {
//   renderList(){
    
//     // // CRIAR UM ARRAY
//     // const habitos = [
//     //   'Correr', 'Musculação', 'Futiba', 'Basquete', 'fala aí'
//     // ]

//     // // RETORNAR UM COMPONENTE TEXT COM CADA HÁBITO DO ARRAY
//     // const ret = habitos.map((habito, idx) => {
//     //   return <Text key={idx}> {habito}</Text>
//     // })
    
//     const ret = HabitosJson.map((habito, idx) => {
//       return <Text key={idx}> {habito.nome}</Text>
//     })

//     return ret;
//   }
  
//   render() {
//     return (
//       <View>
//         {/* <Text>Sandy caio</Text> */}
//         {/* {this.renderList()} */}
//         //<Image
//         //  style={{width: '100%',height: '100%'}}
//         //  source={require('../images/sandy.jpg')}
//         ///>
//         {/* <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}>
//           <ScrollView style={styles.container}>
//             <Image
//                 source = {require('../images/logo2.jpeg')}
//                 style={styles.logo}
//             />
//             <FormRow>flex: 1, justifyContent: "center", alignItems: "center"
//                 <TextInput flex: 1, justifyContent: "center", alignItems: "center"
//                     style={styflex: 1, justifyContent: "center", alignItems: "center"les.input}
//                     keyboardType= "email-address"
//                     placeholder = "user@email.com"
//                     value = {this.state.email}
//                     onChangeText = {value => this.onChangeHandler('email',value)}
//                 />
//             </FormRow>
//             <FormRow>
//                 <TextInput 
//                     style={styles.input}
//                     placeholder="**************"
//                     secureTextEntry
//                     value = {this.state.senha}
//                     onChangeText = {value => this.onChangeHandler('senha',value)}
//                 />
//             </FormRow>
//             <View>
//                 {this.renderButton()}
//             </View>
//           </ScrollView>
//         </KeyboardAvoidingView> */}
//       </View>
//     );
//   }
// }


