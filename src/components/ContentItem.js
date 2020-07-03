import React from "react";
import { TouchableOpacity } from "react-native";
import { ViewItem, LineText, FakeImage } from "../style/styles";

const ContentItem = (props) => {
  const { name, img, desc, id, onPress } = props;

  function renderImg(img) {
    if (img) {
      return <FakeImage source={{ uri: img }} />;
    } else {
      return <FakeImage />;
    }
  }

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <ViewItem>
        {renderImg(img)}
        <LineText fontSize="20px">{name}</LineText>
      </ViewItem>
    </TouchableOpacity>
  );
};

export default ContentItem;
