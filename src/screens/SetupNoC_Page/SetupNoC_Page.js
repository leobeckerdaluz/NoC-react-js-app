import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SetupNoC_Page extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Página de Setup!</Text>
      </View>
    );
  }
}

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
//             <FormRow>
//                 <TextInput 
//                     style={styles.input}
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


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingRight:10,
        paddingLeft:10
    },
    input:{
        paddingLeft:5,
        paddingRight:5
    },
    btn: {
        paddingTop: 20,
        fontSize:11,
        marginBottom: 100,
    },
    logo:{
        aspectRatio:1,
        resizeMode: 'center',
        width:400,
        height: 400,
    },
    logoView:{
        justifyContent: "center",
        alignItems: "center"
    },
    loading: {
        padding: 20,
    }
});