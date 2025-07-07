// App.js

// 1️⃣ Importaciones necesarias para construir la interfaz
import React, { useState } from 'react'; // React y useState para manejar estados en componentes funcionales
import { StyleSheet, Text, View, Button } from 'react-native'; // Componentes básicos de la UI
import { StatusBar } from 'expo-status-bar'; // Control de la barra superior del sistema (hora, batería, etc.)
// 2️⃣ Componente Texto
// Muestra un texto en pantalla y lo cambia al presionarlo.
// Acepta un estilo adicional mediante la prop 'style'.

const Texto = ({ style }) => {
  // Estado que guarda el contenido del texto. Inicialmente muestra 'Hola mundo'.
  const [contenido, setContenido] = useState('Hola mundo');

  // Función que se ejecuta cuando se presiona el texto. Actualiza el estado.
  const actulizaTexto = () => {
    setContenido('Estado Modificado');
  };

  return (
    // El estilo final es una combinación del estilo base + el que se reciba como prop desde el padre.
    // El evento onPress permite que el <Text /> sea interactivo.
    <Text style={[styles.Text, style]} onPress={actulizaTexto}>
      {contenido}
    </Text>
  );
};

/*
🧠 Detalles importantes:
- style={[styles.Text, style]}: aplica múltiples estilos. El segundo (style) puede sobrescribir el primero.
- onPress: convierte el texto en un componente táctil.
- Esto permite usar <Texto style={styles.azul} /> para cambiar su fondo dinámicamente.
*/
// 3️⃣ Componente Boton
// Muestra un botón cuyo título cambia al presionarlo.

const Boton = () => {
  // Estado que controla el texto del botón.
  const [conteiner1, conteiner2] = useState('Botón');

  // Función que cambia el título cuando el botón es presionado.
  const actulziarBoton = () => {
    conteiner2('Botón presionado');
  };

  return (
    // <Button /> recibe su título del estado actual y ejecuta la función cuando se presiona.
    <Button title={conteiner1} onPress={actulziarBoton} />
  );
};

/*
🧠 Detalles:
- Button es un componente simple, sin posibilidad de aplicar estilos directamente.
- Ideal para acciones rápidas como enviar formularios o cambiar textos.
*/
// 4️⃣ Componente principal App
// Aquí se organizan y muestran todos los componentes creados anteriormente.

export default function App() {
  return (
    // View actúa como el contenedor general de toda la pantalla.
    <View style={styles.container}>

      {/* Tres textos con estilo base y comportamiento interactivo */}
      <Texto />
      <Texto />
      <Texto />

      {/* Botón con comportamiento dinámico */}
      <Boton />

      {/* Tres textos con estilos personalizados de fondo */}
      <Texto style={styles.azul} />
      <Texto style={styles.verde} />
      <Texto style={styles.negro} />

      {/* Barra de estado (Expo) */}
      <StatusBar style="auto" />
    </View>
  );
}

/*
🧠 Detalles de View:
- style={styles.container} aplica estilos de flexbox.
- Alineación vertical y horizontal definida en el StyleSheet.
- Los componentes hijos se renderizan en el orden que aparecen.
*/
// 5️⃣ Estilos con StyleSheet
// Define estilos reutilizables usando nombres clave.

const styles = StyleSheet.create({
  container: {
    flex: 1,                      // El View ocupa toda la altura de la pantalla
    backgroundColor: '#fff',      // Fondo blanco
    alignItems: 'stretch',        // Estira los hijos horizontalmente (ancho máximo)
    justifyContent: 'center',     // Centra los hijos verticalmente
  },
  Text: {
    color: 'white',               // Color del texto
    fontSize: 27,                 // Tamaño grande para destacar
    padding: 10,                  // Espaciado interno para que no quede pegado a los bordes
    textAlign: 'center',          // Centra horizontalmente el texto
  },
  azul: {
    backgroundColor: 'blue'       // Fondo azul (se combina con Text)
  },
  verde: {
    backgroundColor: 'green'      // Fondo verde
  },
  negro: {
    backgroundColor: 'black'      // Fondo negro
  }
});

/*
🧠 Detalles:
- StyleSheet.create() mejora el rendimiento en dispositivos móviles.
- Puedes combinar estilos con style={[styles.Text, styles.azul]}
- Propiedades más comunes: color, fontSize, padding, margin, backgroundColor, textAlign
- Propiedades de flexbox: flex, justifyContent, alignItems, flexDirection
*/
