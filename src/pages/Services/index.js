import React from 'react';
import {View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Header from '../../components/Header'
import {
  Background,
  Container,
  AreaTitle,
  AreaButttons,
  Buttons,
  ButtonText,
  Title,
  ButtonWhatsZap,
  ButtonWeb,
  Social,
  SocialTitle,
  Logos
} from './style'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Services() {
  return (
   
   <Background>
     <Header/>
     <Container behavior={Platform.OS == 'ios'? 'padding':''}>
      <AreaTitle>
        <Title>Nossas Soluções</Title>
      </AreaTitle>

      <AreaButttons>
        <Buttons onPress={()=> alert('exibir detalhes num modal')}>
          <ButtonText>TEF (PayGo, SiTef e Scope)</ButtonText>
        </Buttons>

        <ButtonWhatsZap>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
        
      <AreaButttons>
        <Buttons onPress={()=> alert('exibir detalhes num modal')}>
          <ButtonText>Conta Digital PJ gratuita</ButtonText>
        </Buttons>

        <ButtonWhatsZap>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
        
      <AreaButttons>
        <Buttons onPress={()=> alert('exibir detalhes num modal')}>
          <ButtonText>POS (Maquininha de Cartão)</ButtonText>
        </Buttons>

        <ButtonWhatsZap>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
      
      <AreaButttons>
        <Buttons onPress={()=> alert('exibir detalhes num modal')}>
          <ButtonText>Conciliador de Cartões</ButtonText>
        </Buttons>

        <ButtonWhatsZap>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
      <SocialTitle>Siga a 3RMS nas redes</SocialTitle>
      <Social>
       <Logos>
          <Icon name='logo-youtube' color='red' size={60} />
        </Logos>
        <Logos>
          <Icon name='logo-instagram' color='purple' size={60} />
        </Logos>
        <Logos>
          <Icon name='logo-facebook' color='blue' size={60} />
        </Logos> 
        <Logos>
          <Icon name='logo-linkedin' color='blue' size={60} />
        </Logos>
        
      </Social>

     </Container>
     </Background>
  );
}
