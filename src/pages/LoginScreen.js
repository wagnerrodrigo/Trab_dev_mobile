import React from 'react';
import { View, TextInput, Button } from 'react-native'; 
import firebase from '../database/Firebase';

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            mail: '',
            password: ''
        }
    }
    


    componentDidMount() {
         firebase
           .auth()
           .signInWithEmailAndPassword(
             "wagnerrodrigo.pan@gmail.com",
             "123456789"
           )
           .then((user) => {
             console.log("usuario logado ", user);
           })
           .catch((error) => {
             console.log("erro ", error);
           })
           .finally(() => {
             console.log("terminou");
           });
        
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