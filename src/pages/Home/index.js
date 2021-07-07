import React,{useState} from 'react';
import {FlatList, Platform,Text,View} from 'react-native'
import Header from '../../components/Header'
import GridResult from '../../components/GridResult'

import {
    Background,
    Container,
    AreaInput,
    Input, 
    SubmitButton,
    TextButton,
    AreaDados,
    
} from './style'

// import { Container } from './styles';

const Home = () => {

    const [txDebito, setTxDebito] = useState('')
    const [txCredito, setTxCredito] = useState('')
    const [txAtencipacao, setTxAtencipacao] = useState('')
    const [data, setData] = useState([
        {id: 0, taxaTotal:12.0230, receber:12.00, desconto:12.00},
        {id: 1, taxaTotal:12.02, receber:12.01, desconto:12.00},
        {id: 2, taxaTotal:2.00, receber:200000.00, desconto:2.00},
        {id: 3, taxaTotal:3.00, receber:3000.00, desconto:300.00},
        {id: 4, taxaTotal:4.00, receber:40000.00, desconto:4000.00},
        {id: 5, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 6, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 7, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 8, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 9, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 10, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 11, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
        {id: 12, taxaTotal:5.00, receber:50000.00, desconto:50000.00},
    ])
    
    function hanldeCalc(){
        
    }
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

                <SubmitButton onPress={hanldeCalc}>
                    <TextButton>Simular</TextButton>
                </SubmitButton>

                <AreaDados>
                    <FlatList
                    data={data}
                    renderItem={({item}) => <GridResult data={item}/>}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={(item) => item.id}
                    />
                    
                </AreaDados>
            </Container>
        </Background>
    );
}



export default Home;

