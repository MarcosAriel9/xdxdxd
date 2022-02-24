import * as React from 'react';
import { StyleSheet,TextInput, View } from 'react-native';

export default function Form({ navigation }){
    return(
        <View >
      <View style = {styles.viewInput}>
          <TextInput placeholder='Cantidad a Pedir' keyboardType='numeric' style = {styles.input} onChange={(e)=> capital(e.nativeEvent.text)}></TextInput>
          <TextInput placeholder='Interes %' keyboardType='numeric' style= {styles.input} onChange={(e) => interes(e.nativeEvent.text)}></TextInput>
          <TextInput placeholder='Cantidad a Pedir' keyboardType='numeric' style = {styles.input} onChange={(e)=> capital(e.nativeEvent.text)}></TextInput>
          <TextInput placeholder='Interes %' keyboardType='numeric' style= {styles.input} onChange={(e) => interes(e.nativeEvent.text)}></TextInput>
      
      </View>
      </View>
   
   );
 }
 
 const styles = StyleSheet.create({
     viewForm:{
         position : "absolute",
         bottom: 0,
         width : "85%",
         paddingHorizontal: 50,
         backgroundColor: "red",
         borderRadius : 40,
         height: 180,
        
     },
     viewInput : {
        
     },
     input : {
         height: 50,
         backgroundColor: "white",
         borderWidth: 1,
         borderColor: "blue",
         borderRadius: 5,
        
         marginRight: 5,
         marginLeft: -5,
         marginBottom: 10,
         color: "#000",
         paddingHorizontal:20
     },
     inputPorcentaje : {
         width: "40%",
         marginLeft: 5
     }
 });
 
 const pickerSelectStyles = StyleSheet.create({
     inputIOS: {
         fontSize: 16,
         paddingVertical: 12,
         paddingHorizontal: 10,
         borderWidth: 1,
         borderColor: "grey",
         borderRadius: 40,
         color: "black",
         paddingRight: 30,
         backgroundColor: "#fff",
         marginLeft: -5,
         marginRight: -5
     },
     inputAndroid:{
         fontSize: 16,
         paddingVertical: 8,
         paddingHorizontal: 10,
         borderWidth: 0.5,
         borderColor: "grey",
         borderRadius: 8,
         color: "black",
         paddingRight: 30,
         backgroundColor: "#fff"
     }
 });
 