import React,{useState} from 'react';
import {FlatList, Keyboard, Platform, StyleSheet} from 'react-native'
import Header from '../../components/Header'
import GridResult from '../../components/GridResult'
import Toast from 'react-native-simple-toast';
import { TextInputMask } from 'react-native-masked-text'
import * as Animatable from 'react-native-animatable';


import {
    Background,
    Container,
    AreaInput,
    Text, 
    SubmitButton,
    TextButton,
    AreaDados,
    
} from './style'

// import { Container } from './styles';

const Home = () => {

    let vlrVenda, taxaDebito,taxaCredito,taxaAntecipacao

    const [iptVenda, setiptVenda] = useState('')
    const [textButton, settextButton] = useState('Simular')
    const [show, setshow] = useState(true)
    const [iptDebito, setiptDebito] = useState('')
    const [iptCredito, setiptCredito] = useState('')
    const [iptAntecipacao, setiptAntecipacao] = useState('')
    const [data, setData] = useState([])
    const [animation, setanimation] = useState('')
    let result = []

    function calcDebito(){
              
        //---------------- calculo das taxas -------------------
        //CALCULO DEBITO
        //valorDesconto = (taxaDeDebito/100 ) * valorDaVenda
        //valorReceber = valorDaVenda - valorDesconto
        if (iptDebito !== '' || iptDebito === '0' ){
            let valorDesconto , valorReceber
            
            valorDesconto = (taxaDebito.getRawValue()/100) * vlrVenda.getRawValue()
            valorReceber = vlrVenda.getRawValue() - valorDesconto
            
            result.push ({
                    id:0,
                    taxaTotal:taxaDebito.getRawValue(),
                    receber:valorReceber,
                    desconto:valorDesconto,
                })
            // setData(result)
            // console.log(result)
        }
    }

    function calcCredito(){
        //credito a vista
        //taxaTotal = (taxaAntecipacao x vezes ) + taxaCredito
        //vrlDesconto = (taxaTotal/100) * valorvenda
        //vrlReceber = valorVenda - vlrDesconto
        
        let vezes
        let valorDesconto , valorReceber, taxaTotal
        

        for(vezes=1; vezes <= 12; vezes++){
            
            let taxaAntecip = taxaAntecipacao.getRawValue()
            
            if (vezes === 1){
                taxaAntecip = 0
            }
            
            taxaTotal = (taxaAntecip * vezes) + taxaCredito.getRawValue()
            valorDesconto = (taxaTotal / 100) * vlrVenda.getRawValue()
            valorReceber = vlrVenda.getRawValue() - valorDesconto

            result.push({
                id:vezes,
                taxaTotal:taxaTotal,
                receber:valorReceber,
                desconto:valorDesconto,
            })
        }
    }

    //Execute the calcs and insert in object
    function hanldeCalc(){
        
        if(show){
            if (iptCredito == '' || iptAntecipacao == '' || iptVenda == '' ){
                Toast.showWithGravity('Insira os dados para simulação', Toast.SHORT, Toast.TOP)
                return
            }

            //dispensa o teclado
            Keyboard.dismiss()
            //Caculo taxas debito
            calcDebito()
            //calculo taxas credito
            calcCredito()
            //atualiza state data
            setData(result) 
            setanimation('slideInDown')
            settextButton('Simular Novamente')
            setshow(false)
        }else{
            clear()
        }
        
    }

    function clear(){
        setiptVenda('')
        setiptDebito('')
        setiptCredito('')
        setiptAntecipacao('')
        settextButton('Simular')
        setshow(true)
        setData([])
        
    }
    return (
        <Background>
            <Header/>
            <Container behavior={Platform.OS == 'ios'? 'padding':''}>
                
                {/* valor venda */}
                <AreaInput>
                    <Text>Valor Venda</Text>
                    <TextInputMask
                    style={maskinputStyles.input}
                    type={'money'}
                    options={{
                        separator: ',',
                        delimiter: '.',
                        unit:'R$',
                        suffixUnit: ''
                    }}
                    value={iptVenda}
                    onChangeText = {value => setiptVenda(value)}
                    keyboardType = 'number-pad'
                    placeholder='R$0000,00'
                    ref={ ref => vlrVenda = ref}
                    />
                </AreaInput>
                 
                 {/* taxa debito */}
                <AreaInput>
                    <Text>Taxa Debito</Text>
                    <TextInputMask
                        style={maskinputStyles.input}
                        type={'money'}
                        options={{
                            separator: ',',
                            delimiter: '.',
                            unit:'',
                        }}
                        value={iptDebito}
                        onChangeText = {value => setiptDebito(value)}
                        keyboardType = 'number-pad'
                        placeholder='0,00'
                        ref={ ref => taxaDebito = ref}
                        />
                </AreaInput>
                
                {/* taxa credito */}
                <AreaInput>
                    <Text>Taxa Credito</Text>
                    <TextInputMask
                            style={maskinputStyles.input}
                            type={'money'}
                            options={{
                                separator: ',',
                                delimiter: '.',
                                unit:'',
                            }}
                            value={iptCredito}
                            onChangeText = {value => setiptCredito(value)}
                            keyboardType = 'number-pad'
                            placeholder='0,00'
                            ref={ ref => taxaCredito = ref}
                            />
                </AreaInput>
                
                {/* taxa antecipação */}
                <AreaInput>
                    <Text>Taxa Antecipacao</Text>
                    <TextInputMask
                            style={maskinputStyles.input}
                            type={'money'}
                            options={{
                                separator: ',',
                                delimiter: '.',
                                unit:'',
                                
                            }}
                            value={iptAntecipacao}
                            onChangeText = {value => setiptAntecipacao(value)}
                            keyboardType = 'number-pad'
                            placeholder='0,00'
                            ref={ ref => taxaAntecipacao = ref}
                            />


                </AreaInput>

                <SubmitButton onPress={hanldeCalc}>
                    <TextButton>{textButton}</TextButton>
                </SubmitButton>

                
                        <FlatList
                        style={{marginTop:5, width:'90%'}}
                        data={data}
                        renderItem={({item}) => {
                            return(
                                <Animatable.View animation={animation}>
                                    <GridResult data={item}/>
                                </Animatable.View>
                            )
                        }}
                        showsVerticalScrollIndicator={true}
                        keyExtractor={(item) => item.id}
                        />
                
            </Container>
        </Background>
    );
}

const maskinputStyles = StyleSheet.create({
    input:{
        fontSize:21,
        color: '#666',
    }
})


export default Home;

