import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
//import firebase from '../database/Firebase'
import Sqlite from "../database/Sqlite";

import { Fab, TexT, VieW } from "../style/styles";
import ContentItem from "../components/ContentItem";

import { useNavigation } from "@react-navigation/native";

const db = new Sqlite();
let database;

class ContentScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    //       firebase.firestore().collection('contents').onSnapshot((query)=>this.contentUpdate(query));
    database = db.initDB();
    const { navigation } = this.props;
    navigation.addListener("focus", () => {
      this.contentUpdate();
    });
  }
  /*
    qualquer nome do metodo
  contentUpdate(query){
    const contents = [];
    query.forEach((doc) => {
      const { name, desc, img } = doc.data();
      contents.push({
        id: doc.id,
        name,
        desc,
        img
      })
    });
    this.setState({
      contents,
      isLoading: false,
    })
 }
 */

  contentUpdate() {
   console.log("contentUpdate");
    let contents = [];

    db.listContents(database)
      .then((data) => {
        console.log("data ", data);
        contents = data;
        this.setState({
          contents,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState = {
          isLoading: false,
        };
      });
  }

  renderActivityIndicator() {
    if (this.state.isLoading) {
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
    const { navigation } = this.props;

    const items = contents.map((content, index) => (
      <ContentItem
        id={content.id}
        desc={content.desc}
        name={content.name}
        img={content.img}
        onPress={() =>
          navigation.navigate("ContentDetailScreen", {
            id: content.id,
            desc: content.desc,
            name: content.name,
            img: content.img,
            database: database,
        })
      }
      />
    ));

    return (
      <VieW>
        <ScrollView>{items}</ScrollView>
        <Fab
          onPress={() => {
            navigation.navigate("SecondScreen", { database: database });
          }}
        >
          <TexT>+</TexT>
        </Fab>
      </VieW>
    );
  }
}

export default function (props) {
const navigation = useNavigation();

return <ContentScreen {...props} navigation={navigation} />;
}
