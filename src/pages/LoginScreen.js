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
        apiKey: "AIzaSyCmbOG0wwMeWfzqZzBYJVHJaoJtQAvTyhU",
        authDomain: "aulamovelbd.firebaseapp.com",
        databaseURL: "https://aulamovelbd.firebaseio.com",
        projectId: "aulamovelbd",
        storageBucket: "aulamovelbd.appspot.com",
        messagingSenderId: "815556226593",
        appId: "1:815556226593:web:ef6c02663cb500dd327d60",
        measurementId: "G-2F8BJ8760V"
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