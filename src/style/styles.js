import sytled from 'styled-components/native'
import styled from 'styled-components';

export const VieW = sytled.View`
    background: rgb(34,134,234);
    margin-top: 25px;
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
align-Items: center;
background-color: #06f;
`;