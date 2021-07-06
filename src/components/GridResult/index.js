import React from 'react'
import {
    Container,
    Text,
    Header,
    Body,
    TextTxTotal,
    TextReceber,
    TextDesconto
   
}
from './style'
export default function GridResult(props) {
    // {'id': 1, 'taxaTotal':1, 'receber':2.00, 'desconto':2.00},
    let {id,taxaTotal, receber,desconto} = props.data

    return (
        <Container >
            <Header key={id}>
                {
                    id == 0
                    ?
                    <Text>Debito</Text>
                    :
                    <Text>{id}x</Text>

                }
               
            </Header>

            <Body>
                <TextTxTotal>Taxa Total (%):{taxaTotal.toFixed(2)}</TextTxTotal>
                <TextReceber>Receber: R${receber.toFixed(2)} </TextReceber>
                <TextDesconto>Desconto: R${desconto.toFixed(2)}</TextDesconto>
            </Body>
        </Container>
    )
}
