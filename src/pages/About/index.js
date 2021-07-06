import React from 'react';
import Header from '../../components/Header'
import {
  Background,
  Container,
  AreaSobreRMS,
  AreaSobreDev,
  Title,
  AreaDados,
  Text
} from './style'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Services() {
  return (
   <Background>
     <Header/>
     <Container>
        <AreaSobreRMS>
            <Title>Sobre a 3RMS</Title>
            <AreaDados>
                <Text>CNPJ: 000.000.000/0001-00</Text>
                <Text>Sede: São Paulo, Barra Funda</Text>
                <Text>Contato: (11) 9 9999-9999</Text>
                <Text>Email:renato@tresrms.com.br</Text>
                <Text>Todos o direitos reservados</Text>

            </AreaDados>
        </AreaSobreRMS>

        <AreaSobreDev>
            <Title>Sobre o Dev</Title>
            <AreaDados>
                <Text>Developer: Claudio Morais</Text>
                <Text>Sede: Extrema, Minas Gerais</Text>
                <Text>Contato: (35) 9 9999-9999</Text>
                <Text>Email:claudiopdcgdm@gmail.com.br</Text>
                <Text>Todos o direitos reservados</Text>
            </AreaDados>
        </AreaSobreDev>
      
     </Container>
   </Background>
  );
}
