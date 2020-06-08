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

export const TexT = sytled.Text`
    font-size: 30px;
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
