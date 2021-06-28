import styled from 'styled-components'
import Styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = Styled.View`
align-items: center;
justify-content: center;
/* padding:${1 + getStatusBarHeight()}px;  */
padding:2px;
background-color:#00b1ff;
height:60px;
border-bottom-width:1px;
border-bottom-color: #222;
elevation:1;
`

export const Text = styled.Text`
text-align: center;
font-size:32px;
color:#fff;
font-weight: bold;
font-family:'Cambria'
`