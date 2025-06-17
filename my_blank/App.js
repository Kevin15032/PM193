// Zona 1: Importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react, {useState} from'react';


const Texto =({style})=>{
  const[contenido,setContenido]= useState ('Hola mundo');
  const actulizaTexto=() => {setContenido('Estado Modificado')}
  return (
    <Text style={[styles.Text,style]} onPress={actulizaTexto}>{contenido}</Text>
  )
}

// const Boton = () =>{
//   const[conteiner1,conteiner2]= useState('Boton');
//   const actulziarBoton = () => {conteiner2 ('Boton precionado')}
//   return(
//     <Button title={conteiner1} onPress={actulziarBoton}></Button>
//   )
// }
// Zona 2: Main 
export default function App() {
  return (

    <View style={styles.container}>

      <Texto style={styles.azul}></Texto>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.negro}></Texto>
      {/* <Boton></Boton> */}
      <StatusBar style="auto" />

    </View>

  );
}


// Zona 3: Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
    
  },
  Text:{
    color:'white',
    fontSize: 27
  },
  azul:{backgroundColor:'blue'},
  verde:{backgroundColor:'green'},
  negro:{backgroundColor:'black'}
  
  
});
