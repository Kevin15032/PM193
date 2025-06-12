// Zona 1: Importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react, {useState} from'react';


const Texto =()=>{
  const[contenido,setContenido]= useState ('Hola mundo');
  const actulizaTexto=() => {setContenido('Estado Modificado')}
  return (
    <Text onPress={actulizaTexto}>{contenido}</Text>
  )
}

const Boton = () =>{
  const[conteiner1,conteiner2]= useState('Boton');
  const actulziarBoton = () => {conteiner2 ('Boton precionado')}
  return(
    <Button title={conteiner1} onPress={actulziarBoton}></Button>
  )
}
// Zona 2: Main 
export default function App() {
  return (

    <View style={styles.container}>

      <Texto >Hola</Texto>
      <Texto >Mundo</Texto>
      <Texto >react native</Texto>
      <Boton></Boton>
      <StatusBar style="auto" />

    </View>

  );
}


// Zona 3: Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
