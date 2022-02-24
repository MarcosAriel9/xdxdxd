import * as React from 'react';
import { Text, View } from 'react-native';

export default function Results(props){
    let hola= "wenas"
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOLA {hola} TIENES {hola} AÑOS Y TU IMC ES {hola} Y TE CLASIFICAS COMO :{hola}</Text>
    </View>
    )
}