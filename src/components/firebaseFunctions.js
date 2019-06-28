import firebase from 'firebase';
var firebase_credentials = require('../credentials');


export function initFirebase(){
    if (!firebase.apps.length) {
        firebase.initializeApp(firebase_credentials);
    }
}

export function postToFirebase(data, path){
    firebase.database().ref(path).push({ data })
    .then((data)=>{
        //success callback
        console.log('data ' , data)})
    .catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }

export const alguma = function getDataFrom(path){    
    var con = firebase.database().ref(path);    
    var ret;
    con.once('value')
    .then(snapshot => {
        // snapshot.val() is the dictionary with all your keys/values from the '/store' path
        ret =  snapshot.val();
        // this.setState({ stores: snapshot.val() })
    });
}

// _func = () => {

// }