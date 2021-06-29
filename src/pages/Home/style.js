
import { KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components'

export const Background = styled.View`
flex:1;
background-color: #fff;

`
export const Container = styled.KeyboardAvoidingView`
flex:1;
/* justify-content: center; */
align-items: center;
`

export const Text = styled.Text`
font-size: 30px;
`
export const AreaInput = styled.View`
border-width: 1px;
border-radius: 10px;
width: 90%;
margin-top:10px;
`
export const Input = styled.TextInput`
font-size: 21px;
color: #000;
` 

export const SubmitButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
background-color: #00b1ff;
width: 90%;
height: 45px;
border-radius:7px;
margin-top:10px;
`;

export const TextButton = styled.Text`
font-size:21px;
color: #fff;
`

export const AreaDados = styled.View`
flex:1;
background-color:#fff;
width: 90%;
margin-top: 5px;
border-top-left-radius: 7px;
border-top-right-radius: 7px;
`




