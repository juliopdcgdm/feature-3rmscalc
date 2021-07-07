import React from 'react';
import { Linking } from 'react-native';
import Header from '../../components/Header'
import {
  Background,
  Container,
  Title,
  AreaDados,
  Text,
  Button,
  TextButton,
} from './style'


export default function Services() {

  function openWhatsapp(msg, phone){
    let url = `whatsapp://send?text=${msg}&phone=${phone}`
    Linking.openURL(url)
    .then(data => console.log('Whats zap aberto com sucesso' +  data))
    .catch(()=> console.log('Whatsapp não está instalado no dispositivo'))
  }
  return (
   <Background>
     <Header/>
     <Container behavior={Platform.OS == 'ios'? 'padding':''}>
          <AreaDados>
              <Title>Desenvolvedor:</Title>
              <Text>Claudio Morais</Text>
          </AreaDados>
          <AreaDados>
            <Title>Versão:</Title>
            <Text>1.00 v</Text>
          </AreaDados>
          <AreaDados>
            <Title>Bugs, erros, sugestões:</Title>
            <Text>suporte@3rmstech.com.br</Text>
          </AreaDados>
          <Button onPress={() => openWhatsapp('Gostaria de saber Sobre desenvolvedor 3rmsCalc', '5535991236046')}>
            <TextButton>Contato</TextButton>
          </Button>
     </Container>
   </Background>
  );
}
