import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: ''
        }
    }

    tryLogin() {
        console.log("usuario", this.state.mail, " senha ", this.state.password);
    }

    onChangeMail(value) {
        this.setState({ mail: value });
    }

    onChangePassword(value) {
        this.setState({ password: value });
    }

    render() {


        return (
            <View>
                <TextInput placeholder="user@email.com"
                    value={this.state.mail}
                    onChangeText={(value) => this.onChangeMail(value)}

                />
                <TextInput placeholder="******"
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={(value) => this.onChangePassword(value)}
                />
                <Button
                    color="#5c5470"
                    title="Entrar"
                    onPress={() => this.tryLogin()} />
            </View>
        );
    }

};