import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Reports_Page extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Reports Page!</Text>
      </View>
    );
  }
}

// import React from 'react-native';
// import {TextInput, StyleSheet, Button, ScrollView, View, Image, KeyboardAvoidingView, ActivityIndicator, Alert} from 'react-native';
// import FormRow from '../components/FormRow';
// import firebase from 'firebase';


// export default class LoginPage extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             email:'leobeckerdaluz@gmail.com',
//             senha :'caio123456',
//             isLoading: false,
//             message: "",
//         }   
//     }

//     acessarApp(){
//         this.setState({isLoading: false});
        
//         console.log("Entrou no acessarApp")

//         // let resetActions = StackActions.reset({
//         //        index: 0,
//         //      actions: [
//         //          NavigationActions.navigate({routeName: 'Main'}),
//         //      ]
//         //  });
        
//         //  this.props.navigation.dispatch(resetActions);
         
//         this.props.navigation.navigate('Main');


//         //  navigation.dispatch(NavigationActions.navigate({ routeName: 'Main' }));
//     }

    // componentDidMount() {
//         // Your web app's Firebase configuration
//         var firebaseConfig = {
//             apiKey: "AIzaSyD4DPd_UG5xm95WO2IRHvDrAPiHWmgmmiI",
//             authDomain: "noc-react-js-app.firebaseapp.com",
//             databaseURL: "https://noc-react-js-app.firebaseio.com",
//             projectId: "noc-react-js-app",
//             storageBucket: "noc-react-js-app.appspot.com",
//             messagingSenderId: "166276759013",
//             appId: "1:166276759013:web:8ca8b5960dfb40fb"
//         };
//         // Initialize Firebase
//         firebase.initializeApp(firebaseConfig);
    // }

//     login(){
//         this.setState({isLoading: true, message:""});
//         const {email, senha} = this.state;
    
//         console.log("ENTROU AQUI");
        
//         return firebase
//         .auth()
//         .signInWithEmailAndPassword(email, senha)
//         .then(user => {
//             console.log("Acesso Permitido!");
//             this.acessarApp();
//         })
//         .catch(error => {
//             console.log(error.code);
//                 this.setState({
//                     message: this.getMsgByErrorCode(error.code),
//                     isLoading: false
//                 });
//             })
//     }
    
//     getMsgByErrorCode(errorCode){
//         switch(errorCode){
//             case "auth/wrong-password":
//                 return "Senha Incorreta";
//             case "auth/invalid-email":
//                 return "E-mail inválido";
//             case "auth/user-not-found":
//                 return "Usuário Não Encontrado";
//             case "auth/user-disable":
//                 return "Usuário desativado";
//             case "auth/email-already-in-use":
//                 return "Usuário já em uso";
//             case "auth/operation-not-allowed":
//                 return "Operação não permitida!";
//             case "auth/weak-password":
//                 return "Senha muito fraca!";
//             default:
//                 console.log(errorCode);
//                 return "Erro desconhecido!"
//         }
//     }

//     cadastrar(){
//         const {email, senha} = this.state;
    
//         return firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, senha)
//             .then(user => {
//                 this.acessarApp()
//             })
//             .catch(error => {
//                 this.setState({
//                     message: this.getMsgByErrorCode(error.code),
//                     isLoading: false
//                 });
//             })
//     }
    
//     solicitarCadastro(){
//         const {email, senha} = this.state;
//         if(!email || !senha){
//             Alert.alert(
//                 "Cadastramento",
//                 "Para se cadastrar informe e-mail e senha!"
//             );
//             return null;
//         }
//         Alert.alert(
//             "Cadastramento",
//             "Deseja cadastrar o usuário om os dados informados?",
//             [{
//                 text: "CANCELAR",
//                 style: 'cancel'
//             },{
//                 text: "CADASTRAR",
//                 onPress: () => {this.cadastrar()}
//             }],
//         );
//     }

//     onChangeHandler(field, value){
//         this.setState({[field]:value});
//     }

//     renderMessage(){
//         const {message} = this.state;
//         if(!message)
//             return null;
        
//         Alert.alert(
//             "Erro!",
//             message.toString(),
//             [{
//                 text: 'OK',
//                 onPress: () => { this.setState({message: ''}); }
//             }]
//         );
//     }

//     renderButton(){
//         if (this.state.isLoading)
//             return <ActivityIndicator size="large" style={styles.loading}/>;
        
//         return (
//             <View>
//                 <View>
//                     <Button style={styles.btn}
//                         title='ENTRAR'
//                         coloar='#6542f4'
//                         onPress={() => this.login() }
//                     />
//                 </View>
//                 <View>
//                     <Button style={styles.btn}
//                         title='CADASTRE-SE'
//                         coloar='#A08AF7'
//                         onPress={() => this.solicitarCadastro() }
//                     />
//                 </View>
//             </View>
//         )
//     }

//     render(){
//         // this.renderMessage();

//         return(
//             <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}>
//                 <ScrollView style={styles.container}>
//                     <Image
//                         source = {require('../images/logo2.jpeg')}
//                         style={styles.logo}
//                     />
//                     <FormRow>
//                         <TextInput 
//                             style={styles.input}
//                             keyboardType= "email-address"
//                             placeholder = "user@email.com"
//                             value = {this.state.email}
//                             // onChangeText = {value => this.onChangeHandler('email',value)}
//                         />
//                     </FormRow>
//                     <FormRow>
//                         <TextInput 
//                             style={styles.input}
//                             placeholder="**************"
//                             secureTextEntry
//                             value = {this.state.senha}
//                             // onChangeText = {value => this.onChangeHandler('senha',value)}
//                         />
//                     </FormRow>
//                     <View>
//                         {/* {this.renderButton()} */}
//                     </View>
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         )
//     }
// }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        // paddingRight:10,
        // paddingLeft:10
    },
    input:{
        paddingLeft:5,
        paddingRight:5
    },
    btn: {
        // paddingBottom:20,
        fontSize:11,
    },
    logo:{
        aspectRatio:1,
        resizeMode: 'center',
        width:400,
        height: 400
    },
    logoView:{
        justifyContent: "center",
        alignItems: "center"
    },
    loading: {
        padding: 20,
    }
});