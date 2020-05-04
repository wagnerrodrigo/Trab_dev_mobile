import React from 'react';
import { View, TextInput, Button } from 'react-native'; 
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            mail: '',
            password: ''
        }
    }
    
    componentDidMount() {
     var firebaseConfig = {
       apiKey: "AIzaSyDt3EVOo7XOrY3GHr-qNiP-7YdS5IQHHnQ",
       authDomain: "notifica-a3d65.firebaseapp.com",
       databaseURL: "https://notifica-a3d65.firebaseio.com",
       projectId: "notifica-a3d65",
       storageBucket: "notifica-a3d65.appspot.com",
       messagingSenderId: "1083664168744",
       appId: "1:1083664168744:web:f885364c052c28f086821d",
       measurementId: "G-CX8L5EZEYJ",
     };
      // Initialize Firebase

    //    if(!firebase.app.length){
            firebase.initializeApp(firebaseConfig);
   //    }   
     }


    tryLogin(){
        console.log("usuario", this.state.mail," senha ",this.state.password);
    
        const { mail, password } = this.state;
        //promisse
                firebase.auth().signInWithEmailAndPassword(mail, password)
                    .then(user => {console.log("usuario logado ", user)})
                    .catch(error => {console.log("erro ", error)})
                    .finally(() => {console.log("terminou")})
    
    }

    onChangeMail(value){
        this.setState({mail: value});
    }

    onChangePassword(value){
        this.setState({password: value});
    }

    render() {


        return(
            <View>
                <TextInput placeholder="user@email.com"
                           value={this.state.mail}
                           onChangeText={(value)=>this.onChangeMail(value)}
                           
                           />
                <TextInput placeholder="******"
                            value={this.state.password}
                            secureTextEntry
                            onChangeText={(value)=>this.onChangePassword(value)}
                                />
                <Button 
                   color="#4473ba" 
                   title="Entrar" 
                   onPress={()=>this.tryLogin()}/>
            </View>    
        );
    }

};