import styled from 'styled-components'

export const Background = styled.View `
flex: 1;
background-color: #fff;
`
export const Container = styled.View `
flex: 1;
justify-content:flex-start;
align-items:center;
`
export const AreaDados = styled.View`
flex-direction: column;
justify-content: center;
margin-top:10px;
width: 90%;
`
export const Title = styled.Text`
font-size: 21px;
font-weight: bold;
color: #00b1ff;
`
export const Text = styled.Text`
font-size: 18px;
text-align: left;
padding: 5px;
border-radius: 10px;
border-width: 2px;
border-color: #00b1ff;
color: #666;
`

export const Button = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 90%;
height: 43px;
background-color: #00b1ff;
margin-top:10px;
border-radius : 10px;
`
export const TextButton = styled.Text`
color: #fff;
font-size: 21px;
`
