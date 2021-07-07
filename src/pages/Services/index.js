import React, {useState} from 'react';
import {Linking } from 'react-native'
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

  const [msg, setmsg] = useState('(Teste) Olá vim pelo app 3RMS Calc, gostria de mais informações sobre ')
  const [number, setnumber] = useState('5511987655307')

  function openWhatsApp(name){
    if(msg){
      if(number){
        let url = `whatsapp://send?text=${msg}${name}&phone=${number}`
        Linking.openURL(url)
        .then(data => console.log('Whats zap aberto com sucesso' +  data))
        .catch(()=> console.log('Whatsapp não está instalado no dispositivo'))
      }
    }
  }

  const social = (url,app) =>{
    Linking.openURL(url)
    .then(data => console.log(`abrindo ${app}`))
    .catch(() => console.log(`Erro ao tentar abrir ${app}`))
  }
  return (
   
   <Background>
     <Header/>
     <Container behavior={Platform.OS == 'ios'? 'padding':''}>
      <AreaTitle>
        <Title>Nossas Soluções</Title>
      </AreaTitle>

       {/* TEF */}
      <AreaButttons>
        <Buttons>
          <ButtonText>TEF (PayGo, SiTef e Scope)</ButtonText>
        </Buttons>

        <ButtonWhatsZap onPress={() => openWhatsApp('TEF')}>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
        
      {/* conta Digital */}
      <AreaButttons>
        <Buttons>
          <ButtonText>Conta Digital PJ gratuita</ButtonText>
        </Buttons>

        <ButtonWhatsZap onPress={() => openWhatsApp('Conta Digital')}>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
        
      {/* POS */}
      <AreaButttons>
        <Buttons>
          <ButtonText>POS (Maquininha de Cartão)</ButtonText>
        </Buttons>

        <ButtonWhatsZap onPress={() => openWhatsApp('POS')}>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
      
      {/* PDV */}
      <AreaButttons>
        <Buttons>
          <ButtonText>Sistema PDV (Frente de Loja)</ButtonText>
        </Buttons>

        <ButtonWhatsZap onPress={() => openWhatsApp('PDV - Sistema de frente de loja')}>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
      
      {/* conciliador de cartões */}
      <AreaButttons>
        <Buttons>
          <ButtonText>Conciliador de Cartões</ButtonText>
        </Buttons>

        <ButtonWhatsZap onPress={()=> openWhatsApp('Conciliador de cartões')}>
          <ButtonText><Icon name='logo-whatsapp' color='green' size={35} /></ButtonText> 
        </ButtonWhatsZap>

        <ButtonWeb>
          <ButtonText><Icon name='globe-outline' color='#000' size={35} /></ButtonText>
        </ButtonWeb>
      </AreaButttons>
      
      <SocialTitle>Siga a 3RMS nas redes</SocialTitle>
      
      <Social>
       <Logos onPress={()=> social('https://www.youtube.com/channel/UCMwSNEPPg7VoDbcZB2eRGVQ', 'YouTube')}>
          <Icon name='logo-youtube' color='red' size={60} />
        </Logos>
        <Logos onPress={()=> social('https://www.instagram.com/3rmsoficial/', 'Instagram')}>
          <Icon name='logo-instagram' color='purple' size={60} />
        </Logos>
        <Logos onPress={()=> social('https://www.facebook.com/3rmstech', 'Facebook')}>
          <Icon name='logo-facebook' color='blue' size={60} />
        </Logos> 
        <Logos onPress={()=> social('https://www.linkedin.com/company/3rms-tech/', 'LinkedIn')}>
          <Icon name='logo-linkedin' color='blue' size={60} />
        </Logos>
        
      </Social>

     </Container>
    </Background>
  );
}
