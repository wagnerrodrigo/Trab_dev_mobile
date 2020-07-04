import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
//import firebase from 'firebase';
import firebase from "../database/Firebase";
import { useNavigation } from "@react-navigation/native";
import { TextInpuT } from "../style/styles";
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "",
      password: "",
    };
  }

  componentDidMount() {
    firebase
      .auth()
      .signInWithEmailAndPassword("wagnerrodrigo.pan@gmail.com", "123456789")
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

  tryLogin() {
    console.log("usuario", this.state.mail, " senha ", this.state.password);
    //destructing
    const { mail, password } = this.state;
    const { navigation } = this.props;
    //promisse
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then((user) => {
        console.log("usuario logado ", user);
        navigation.navigate("ContentScreen");
        Alert.alert("Usuário logado com sucesso", "", [{ text: "OK" }]);
      })
      .catch((error) => {
        //                console.log("erro ", error)
        //if (error.code === 'auth/user-not-found')
      })
      .finally(() => {
        console.log("terminou");
      });
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
        <TextInpuT
          placeholder="user@email.com"
          value={this.state.mail}
          onChangeText={(value) => this.onChangeMail(value)}
        />
        <TextInpuT
          placeholder="******"
          value={this.state.password}
          secureTextEntry
          onChangeText={(value) => this.onChangePassword(value)}
        />
        <Button
          color="#856084"
          title="Entrar"
          onPress={() => this.tryLogin()}
        />
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <LoginScreen {...props} navigation={navigation} />;
}
