import styled from 'styled-components'

export const Background = styled.View `
flex: 1;
background-color: #fff;
`
export const Container = styled.View `
flex: 1;
justify-content:center;
align-items:center;
`

export const AreaSobreDev = styled.View`
flex: 1;
justify-content: flex-start;
align-items: flex-start;
width: 95%;
margin-bottom: 10px;
background-color:#fff ;
`
export const AreaDados = styled.View`
flex-direction: column;
margin-top:10px;

`
export const Title = styled.Text`
font-size: 23px;
font-weight: bold;
color: #00b1ff;
`
export const Text = styled.Text`
font-size: 21px;
text-align: left;
padding: 5px;
border-radius: 3px;
border-width: 2px;
border-color: #00b1ff;
width: 350px;
color: #000;
`

export const Button = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 350px;
height: 55px;
background-color: #00b1ff;
margin-top:10px;
border-radius : 10px
`
export const TextButton = styled.Text`
color: #fff;
font-size: 24px;
`
