import styled from "styled-components/native";

export const VieW = styled.View`
  background: #ffffff;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: ${(props) => props.margintop || 0};
  margin-left: ${(props) => props.marginleft || 0};
  margin-right: ${(props) => props.marginright || 0};
  margin-bottom: ${(props) => props.marginbottom || 0};
`;

export const ScrollVieW = styled.ScrollView`
  padding-bottom: 2px;
  padding-top: 20px;
  margin-left:  50px;
  margin-right: 50px;
  
`;

export const ViewItem = styled.View`
         height: 70px;
         border-bottom-width: 2px;
         border-bottom-color: #00c858;
         display: flex;
         flex-direction: row;
         align-items: center;
         shadow-color: red;
         shadow-offset: {width: 1, height: 2};
         shadow-opacity: 0.8;
         shadow-radius: 2;
         elevation: 1;
         margin-left: 5;
         margin-right: 5;
         margin-top: 15;
       `;

export const FakeImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #00c858;
  margin-left: ${(props) => props.maginLeft || 10};
`;

export const TexT = styled.Text`
  font-size: ${(props) => props.fontSize || 30};
  color: white;
`;

export const LineText = styled.Text`
  font-size: ${(props) => props.fontSize || 30};
  margin-left: ${(props) => props.maginLeft || 10};
`;

export const Fab = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 20px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  background-color: #856084;
  border: 5px;
  border-color: rgba(5, 249, 114, 0.5);
`;
export const TextInpuT = styled.TextInput`
  padding: 15px;
  border-bottom-width: 0.7px;
  border-bottom-color: #856084;
  shadow-opacity: 0.8;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtoNd = styled.Button`
  padding-bottom: 2px;
  padding-top: 20px;
  margin-left:  50px;
  margin-right: 50px;
`;