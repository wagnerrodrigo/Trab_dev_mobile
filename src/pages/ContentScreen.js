import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import firebase from "../database/Firebase";
import { Text } from "react-native";
import { Fab, TexT, VieW } from "../style/styles";
import ContentItem from "../components/ContentItem";

export default class ContentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("contents")
      .onSnapshot((query) => this.contentUpdate(query));
  }
  //qualquer nome do metodo
  contentUpdate(query) {
    const contents = [];
    query.forEach((doc) => {
      const { name, desc, img } = doc.data();
      contents.push({
        id: doc.id,
        name,
        desc,
        img,
      });
    });
    this.setState({
      contents,
      isLoading: false,
    });
  }

  renderActivityIndicator() {
    if (this.setState.isLoading) {
      return (
        <VieW>
          <ActivityIndicator size="large" />
        </VieW>
      );
    }
  }

  render() {
    this.renderActivityIndicator();
    const { contents } = this.state;
    const itens = contents.map((content, index) => <ContentItem/>);

    return (
      <VieW>
        <Text>OS ITENS DO BANCO SERÁ RENDERIZADO ABAIXO</Text>

        <Fab>
          <TexT>+</TexT>
        </Fab>
        <ScrollView>{itens}</ScrollView>
      </VieW>
    );
  }
}
