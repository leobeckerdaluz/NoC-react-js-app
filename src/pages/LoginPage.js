import React from 'react';
import {TextInput, StyleSheet, Button, ScrollView, View, Image, KeyboardAvoidingView, ActivityIndicator, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';


export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            senha :'',
            isLoading: false,
            message: "",
        }   
    }

    acessarApp(){
        this.setState({loading: false});
        this.props.navigation.replace('Main');
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAvYvcWtrpKByIMzHV_mBIN9Cqh5edcqDA",
            authDomain: "my-habit-timeline-lbluz.firebaseapp.com",
            databaseURL: "https://my-habit-timeline-lbluz.firebaseio.com",
            projectId: "my-habit-timeline-lbluz",
            storageBucket: "my-habit-timeline-lbluz.appspot.com",
            messagingSenderId: "872395394732",
            appId: "1:872395394732:web:fafdc533c6070d2b"
        };
        firebase.initializeApp(firebaseConfig);
    }

    login(){
        this.setState({isLoading: true, message:""});
        const {email, senha} = this.state;
    
        console.log("ENTROU AQUI");
         
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then(user => {
                console.log("Acesso Permitido!");
                this.acessarApp();
            })
            .catch(error => {
                this.setState({
                    message: this.getMsgByErrorCode(error.code),
                    isLoading: false
                });
            })
    }
    
    getMsgByErrorCode(errorCode){
        switch(errorCode){
            case "auth/wrong-password":
                return "Senha Incorreta";
            case "auth/invalid-email":
                return "E-mail inválido";
            case "auth/user-not-found":
                return "Usuário Não Encontrado";
            case "auth/user-disable":
                return "Usuário desativado";
            case "auth/email-already-in-use":
                return "Usuário já em uso";
            case "auth/operation-not-allowed":
                return "Operação não permitida!";
            case "auth/weak-password":
                return "Senha muito fraca!";
            default:
                return "Erro desconhecido!"
        }
    }

    cadastrar(){
        const {email, senha} = this.state;
    
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(user => {
                this.acessarApp()
            })
            .catch(error => {
                this.setState({
                    message: this.getMsgByErrorCode(error.code),
                    isLoading: false
                });
            })
    }
    
    solicitarCadastro(){
        const {email, senha} = this.state;
        if(!email || !senha){
            Alert.alert(
                "Cadastramento",
                "Para se cadastrar informe e-mail e senha!"
            );
            return null;
        }
        Alert.alert(
            "Cadastramento",
            "Deseja cadastrar o usuário om os dados informados?",
            [{
                text: "CANCELAR",
                style: 'cancel'
            },{
                text: "CADASTRAR",
                onPress: () => {this.cadastrar()}
            }],
        );
    }

    onChangeHandler(field, value){
        this.setState({[field]:value});
    }

    renderMessage(){
        const {message} = this.state;
        if(!message)
            return null;
        
        Alert.alert(
            "Erro!",
            message.toString(),
            [{
                text: 'OK',
                onPress: () => { this.setState({message: ''}); }
            }]
        );
    }

    renderButton(){
        if (this.state.isLoading)
            return <ActivityIndicator size="large" style={styles.loading}/>;
        
        return (
            <View>
                <View>
                    <Button style={styles.btn}
                        title='ENTRAR'
                        coloar='#6542f4'
                        onPress={() => this.login() }
                    />
                </View>
                <View>
                    <Button style={styles.btn}
                        title='CADASTRE-SE'
                        coloar='#A08AF7'
                        onPress={() => this.solicitarCadastro() }
                    />
                </View>
            </View>
        )
    }

    render(){
        this.renderMessage();

        return(
            <KeyboardAvoidingView behavior="padding" enabled style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <Image
                        source = {require('../img/logo.jpeg')}
                        style={styles.logo}
                    />
                    <FormRow>
                        <TextInput 
                            style={styles.input}
                            keyboardType= "email-address"
                            placeholder = "user@email.com"
                            value = {this.state.email}
                            onChangeText = {value => this.onChangeHandler('email',value)}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput 
                            style={styles.input}
                            placeholder="**************"
                            secureTextEntry
                            value = {this.state.senha}
                            onChangeText = {value => this.onChangeHandler('senha',value)}
                        />
                    </FormRow>
                    <View>
                        {this.renderButton()}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C1526',
        // paddingRight:10,
        // paddingLeft:10
    },
    input:{
        paddingLeft:5,
        paddingRight:5
    },
    btn: {
        paddingTop: 20,
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