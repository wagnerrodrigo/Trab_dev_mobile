import sytled from "styled-components/native";
import styled from "styled-components";

export const VieW = sytled.View`
   background: #ffffff;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: ${(props) => props.margintop || 0};
    margin-left: ${(props) => props.marginleft || 0};
    margin-right: ${(props) => props.marginright || 0};
    margin-bottom: ${(props) => props.marginbottom || 0};
`;

export const ViewItem = styled.View`
  height: 60px;
  border-bottom-width: 2px;
  border-bottom-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FakeImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 200px;
  justify-content: center;
  align-items: center;
  background-color: #f4c31e;
  margin-left: ${(props) => props.maginLeft || 10};
`;

export const LineText = styled.Text`
  font-size: ${(props) => props.fontSize || 30};
  margin-left: ${(props) => props.maginLeft || 10};
`;

export const TexT = sytled.Text`
    font-size: ${(props) => props.fontSize || 30};
    color: white;
`;

export const Fab = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 200px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  background-color: #856084;
`;
