// Zona 1: Importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert,ScrollView,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback,Pressable,Switch} from 'react-native';
import React, {useState} from'react';
import { Button as ButonPaper, Provider as ProveedorPaper} from 'react-native-paper';
import {Button as BotonElements} from 'react-native-elements';
 
export default function App() {
   const [modoOscuro, setModoOscuro] = useState(false);
   const alternarModoOscuro = () => setModoOscuro(previo => !previo);
     return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={[styles.container, {backgroundColor: modoOscuro ? '#111' : '#fff'}]}></View>

        <View style={styles.container}>
          <Text style={styles.title}>Modo de pantalla: {modoOscuro ? 'Oscuro' : 'Claro'}</Text>
          <Switch value = {modoOscuro} onValueChange={alternarModoOscuro} />
        </View> 
             
      </ScrollView>
      </ProveedorPaper>

  );
}


// Zona 3: Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
    
    
  },
 title: {
  fontSize: 16,
  marginVertical: 6,
  textAlign: 'center',
  color: '#000'
 },
 section: {
  marginVertical: 15,
  alignItems: 'center',
  width: '100%'
 }
 
});
