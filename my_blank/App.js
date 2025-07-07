// Zona 1: IMPORTACIONES NECESARIAS

// Importamos el componente StatusBar desde Expo para controlar la barra superior del dispositivo
import { StatusBar } from 'expo-status-bar';

// Importamos componentes esenciales desde react-native
// Text: para mostrar texto
// View: contenedor básico similar a <div>
// Button: para crear botones interactivos
import { StyleSheet, Text, View, Button } from 'react-native';

// Importamos React y el hook useState para manejar estados dinámicos
import React, { useState } from 'react';
// COMPONENTE 1: TextoProps

// Este componente permite mostrar texto de dos formas: 
// 1. Usando una prop llamada "contenido"
// 2. Usando "children", que es el texto entre las etiquetas del componente

// props: objeto que contiene todas las propiedades que se le pasan al componente
const TextoProps = (props) => {
  const { contenido, children } = props;

  return (
    <>
      {/* Muestra el texto si se envió la prop "contenido" */}
      {contenido && <Text>{contenido}</Text>}

      {/* Muestra el texto si se colocó algo entre <TextoProps>Texto aquí</TextoProps> */}
      {children && <Text>{children}</Text>}
    </>
  );
};

/*
Ejemplo de uso:
<TextoProps contenido="Hola" />       => muestra "Hola"
<TextoProps>Hola</TextoProps>         => también muestra "Hola"

Esto permite reutilizar el mismo componente con distintas formas de enviarle texto.
*/

// COMPONENTE 2: TextoEstado

// Este componente tiene un estado llamado "contenido", que comienza con el valor 'Hola mundo'.
// Al presionar el texto, se cambia el valor del estado a 'Estado Modificado'.

const TextoEstado = () => {
  // useState crea una variable de estado llamada contenido y una función para actualizarla (setContenido)
  const [contenido, setContenido] = useState('Hola mundo');

  // Esta función se ejecuta cuando el usuario presiona el texto
  const actualizarTexto = () => {
    setContenido('Estado Modificado'); // Cambia el contenido del texto dinámicamente
  };

  return (
    <>
      {/* El texto es presionable gracias al evento onPress */}
      {/* Cada vez que el usuario toca el texto, se ejecuta actualizarTexto y cambia el contenido */}
      <Text onPress={actualizarTexto} style={styles.textoPresionable}>
        {contenido}
      </Text>
    </>
  );
};

/*
Este ejemplo muestra cómo hacer que un componente cambie su contenido cuando el usuario interactúa con él.
Es útil para mostrar mensajes dinámicos, cambios de estado, feedback visual, etc.
*/
// COMPONENTE 3: BotonEstado

// Este componente usa useState para cambiar el título de un botón cuando el usuario lo presiona.
const BotonEstado = () => {
  const [textoBoton, setTextoBoton] = useState('Botón');

  // Esta función cambia el texto del botón
  const actualizarBoton = () => {
    setTextoBoton('Botón presionado');
  };

  return (
    <Button title={textoBoton} onPress={actualizarBoton} />
  );
};

/*
El componente <Button /> de React Native no tiene estilo por defecto, 
pero permite que al presionar el botón se dispare una función como onPress.

Este ejemplo es muy útil para mostrar confirmaciones, enviar formularios, o cualquier acción dinámica.
*/
// COMPONENTE PRINCIPAL DE LA APP

// Este es el punto de entrada de la aplicación. Aquí usamos los componentes anteriores dentro de una vista principal.
export default function App() {
  return (
    <View style={styles.container}>

      {/* Aquí usamos el componente TextoProps con contenido enviado como CHILDREN */}
      <TextoProps>Hola</TextoProps>
      <TextoProps>Mundo</TextoProps>
      <TextoProps>React Native</TextoProps>

      {/* Aquí mostramos un componente con texto que se actualiza al tocarlo */}
      <TextoEstado />

      {/* Aquí mostramos un botón cuyo texto cambia al presionarlo */}
      <BotonEstado />

      {/* La barra de estado es manejada por Expo (íconos superiores como batería, hora, etc.) */}
      <StatusBar style="auto" />
    </View>
  );
}

/*
Este componente agrupa y muestra todos los demás componentes.
Sirve como práctica para ensamblar interfaces simples usando diferentes elementos funcionales.
*/
// ESTILOS DE LA APP

// Usamos StyleSheet para definir estilos en React Native, similar a CSS pero con otra sintaxis
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // El componente ocupa toda la pantalla
    justifyContent: 'center',   // Centra verticalmente su contenido
    alignItems: 'center',       // Centra horizontalmente su contenido
    backgroundColor: '#f0f0f0', // Fondo gris claro
    padding: 20,                // Espacio interno alrededor de los elementos
  },
  textoPresionable: {
    fontSize: 18,               // Tamaño del texto
    marginVertical: 10,         // Espacio arriba y abajo
    color: '#333',              // Color gris oscuro
  }
});
