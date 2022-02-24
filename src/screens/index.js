import * as React from 'react';
import { Button, View } from 'react-native';
import Form from '../components/form';

export default function index({ navigation }){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Form/>
      <Button
        title="Calcular"
        onPress={() => navigation.navigate('Results')}
      />
    </View>
    )
}