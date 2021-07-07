import React from 'react';
import Header from '../../components/Header'
import {
  Background,
  Container,
  AreaSobreDev,
  Title,
  AreaDados,
  Text,
  Button,
  TextButton,
} from './style'


export default function Services() {
  return (
   <Background>
     <Header/>
     <Container behavior={Platform.OS == 'ios'? 'padding':''}>
        <AreaSobreDev>
          <AreaDados>
              <Title>Desenvolvedor:</Title>
              <Text>Claudio Morais</Text>
          </AreaDados>
          <AreaDados>
            <Title>Versão:</Title>
            <Text>1.00 v</Text>
          </AreaDados>
          <Button onPress={()=> alert('Redirecionar para whatsapp')}>
            <TextButton>Contato</TextButton>
          </Button>
        </AreaSobreDev>
     </Container>
   </Background>
  );
}
