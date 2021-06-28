import React from 'react';
import {StatusBar} from 'react-native';
import {Container,Text} from './styles';

export default function Header() {
  return (
      <Container>
          <StatusBar  backgroundColor='#00b1ff' barStyle='light-content' translucent={false}/>
          <Text>3RMS Calc</Text>
      </Container>
      
  )
}
