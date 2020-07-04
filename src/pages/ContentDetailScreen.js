import React from "react";
import { View, TextInput, Button, Alert } from "react-native";
//import firebase from '../database/Firebase'
import Sqlite from "../database/Sqlite";

import { ScrollVieW, TextInpuT } from "../style/styles";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const db = new Sqlite();

class ContentDetailScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      desc: "",
      img: "",
      name: "",
    };
  }

  componentDidMount() {
    const { desc, img, name } = this.props.route.params;

    this.setState({ desc });
    this.setState({ img });
    this.setState({ name });
  }

  updateContent() {
    const { id } = this.props.route.params;
    const { navigation } = this.props;

    console.log("id a ser atualizado ", id);
    const { database } = this.props.route.params;

    const data = {
      name: this.state.name,
      desc: this.state.desc,
      img: this.state.img,
    };

    db.updateContent(id, data, database);
    navigation.navigate("ContentScreen");
    Alert.alert("Campos editados !!!","clique no ok para continuar");

    /*    
    firebase.firestore().collection('contents').doc(id).set(
      {
        name: this.state.name,
        desc: this.state.desc,
        img: this.state.img
      }
    )
    .then(()=>{
      console.log("documento atualizado com sucesso ", id);
      navigation.navigate('ContentScreen');
    })
    .catch((error) =>{
      console.log("Erro ao atualizar o documento ", id, error);
      Alert.alert('Não foi possível atualizar o documento','',[{text:'OK'}]);
    })
*/
  }

  deleteContent() {
    const { id } = this.props.route.params;
    const { navigation } = this.props;

    console.log("id a ser apagado ", id);
    const { database } = this.props.route.params;

    db.deleteContent(id, database);
    navigation.navigate("ContentScreen");
    Alert.alert("Dados apagados","clique no OK para continuar");

    /*
    firebase.firestore().collection('contents').doc(id).delete()
    .then(()=>{
      console.log("documento apagado com sucesso ", id);
      navigation.navigate('ContentScreen');
    })
    .catch((error) =>{
      console.log("Erro ao apagar o documento ", id, error);
      Alert.alert('Não foi possível apagar o documento','',[{text:'OK'}]);
    })
 */
  }

  onChangeTextInput(value, field) {
    const state = this.state;
    state[field] = value;
    this.setState(state);
  }

  render() {
    return (
      <View>
        <TextInpuT
          value={this.state.name}
          placeholder="nome"
          onChangeText={(value) => this.onChangeTextInput(value, "name")}
        />
        <TextInpuT
          value={this.state.desc}
          placeholder="descrição"
          onChangeText={(value) => this.onChangeTextInput(value, "desc")}
        />
        <TextInpuT
          value={this.state.img}
          placeholder="img"
          onChangeText={(value) => this.onChangeTextInput(value, "img")}
        />
        <ScrollVieW>
          <Button
            color="#289567"
            title="Salvar"
            onPress={() => this.updateContent()}
          />
        </ScrollVieW>
        <ScrollVieW>
          <Button
            color="#fc6771"
            title="Apagar"
            onPress={() => this.deleteContent()}
          />
        </ScrollVieW>
      </View>
    );
  }
}

export default function (props) {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <ContentDetailScreen {...props} route={route} navigation={navigation} />
  );
}
