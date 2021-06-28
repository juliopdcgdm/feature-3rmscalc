import React,{useState} from 'react';
import {Platform} from 'react-native'
import Header from '../../components/Header'
import {
    Background,
    Container,
    AreaInput,
    Input, 
    SubmitButton,
    TextButton,
} from './style'

// import { Container } from './styles';

const Home = () => {

    const [txDebito, setTxDebito] = useState('')
    const [txCredito, setTxCredito] = useState('')
    const [txAtencipacao, setTxAtencipacao] = useState('')



    return (
        <Background>
            <Header/>
            <Container behavior={Platform.OS == 'ios'? 'padding':''}>
                
                <AreaInput>
                    <Input 
                    placeholder='Taxa de Débido'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={txDebito}
                    onChangeText={(value) => setTxDebito(value)}
                    keyboardType = 'number-pad'
                    />
                </AreaInput>

                <AreaInput>
                    
                    <Input 
                    placeholder='Taxa de Crédito'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={txCredito}
                    onChangeText={(value) => setTxCredito(value)}
                    keyboardType = 'number-pad'
                    />
                </AreaInput>
                
                <AreaInput>
                    <Input 
                    placeholder='Taxa de Antecipação'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={txAtencipacao}
                    onChangeText={(value) => setTxAtencipacao(value)}
                    keyboardType = 'number-pad'
                    />
                </AreaInput>

                <SubmitButton onPress={()=> alert('Enviado para simulação')}>
                    <TextButton>Simular</TextButton>
                </SubmitButton>



            </Container>
        </Background>
    );
}

export default Home;