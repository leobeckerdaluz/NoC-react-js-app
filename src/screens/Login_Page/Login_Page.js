import React, { Component } from 'react';
import {
	View, 
	StyleSheet,
	TextInput, 
	Button, 
	ScrollView, 
	Image, 
	KeyboardAvoidingView, 
	ActivityIndicator, 
	Alert} from 'react-native';
import FormRow from '../../components/FormRow';
import firebase from 'firebase';
var firebase_credentials = require('../../credentials');


// export default class Login_Page extends React.Component{
export default class Login_Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'leobeckerdaluz@gmail.com',
            senha :'caio123456',
            isLoading: false,
            message: "",
        }
    }

    acessarApp(){
		// Seta o Loading pra falso
		this.setState({isLoading: false});
        
		// Altera a exibição para a Tab Bar de operação
		this.props.navigation.navigate({ routeName: "SignedIn" });
    }

    componentDidMount() {
		// // Initialize Firebase
		// firebase.initializeApp(firebase_credentials);
    }

    login(){
        this.setState({isLoading: true, message:""});
        const {email, senha} = this.state;
    
        console.log("ENTROU AQUI");
		
		console.log("Acesso Permitido!");
		this.acessarApp();
        // return firebase
		// 	.auth()
		// 	.signInWithEmailAndPassword(email, senha)
		// 	.then(user => {
		// 		console.log("Acesso Permitido!");
		// 		this.acessarApp();
		// 	})
		// 	.catch(error => {
		// 		console.log(error.code);
		// 		this.setState({
		// 			message: this.getMsgByErrorCode(error.code),
		// 			isLoading: false
		// 		});
		// 	})
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
                console.log(errorCode);
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
                        source = {require('../../images/logo2.jpeg')}
                        style={styles.logo}
                    />
                    <FormRow>
                        <TextInput 
                            style={styles.input}
                            keyboardType= "email-address"
                            placeholder = "user@email.com"
                            value = {this.state.email}
                            // onChangeText = {value => this.onChangeHandler('email',value)}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput 
                            style={styles.input}
                            placeholder="**************"
                            secureTextEntry
                            value = {this.state.senha}
                            // onChangeText = {value => this.onChangeHandler('senha',value)}
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
        backgroundColor: 'black',
        // paddingRight:10,
        // paddingLeft:10
    },
    input:{
        paddingLeft:5,
        paddingRight:5
    },
    btn: {
		fontSize:11,
        paddingBottom: 10,
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