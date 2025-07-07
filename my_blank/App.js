// Importamos React y el hook useState para manejar el estado del modo oscuro
import React, { useState } from 'react';

// Importamos componentes básicos de React Native
import {
  StyleSheet,      // Para crear estilos
  Text,            // Para mostrar texto en pantalla
  View,            // Contenedor similar a <div>
  ScrollView,      // Vista con desplazamiento vertical
  StatusBar,       // Barra de estado del sistema (hora, batería, etc.)
  Switch           // Interruptor para activar/desactivar el modo oscuro
} from 'react-native';

// Importamos ProveedorPaper desde react-native-paper
// Esto permite que los componentes de esa librería funcionen correctamente (aunque en este ejemplo no se usan visualmente, es buena práctica mantenerlo si luego agregas botones o inputs de react-native-paper)
import { Provider as ProveedorPaper } from 'react-native-paper';
// COMPONENTE: Texto
// Este componente muestra un texto que se puede presionar. Al hacerlo, cambia su contenido.
// Además, permite recibir estilos externos para aplicar colores de fondo (azul, verde, negro).
const Texto = ({ style }) => {
  // Estado que almacena el texto que se va a mostrar. Inicia con "Hola mundo".
  const [contenido, setContenido] = useState('Hola mundo');

  // Función que actualiza el contenido al presionar el texto
  const actulizaTexto = () => {
    setContenido('Estado Modificado');
  };

  return (
    // Componente <Text> que cambia su valor al presionarlo (onPress)
    // style={[...]} permite aplicar varios estilos (el base + el que venga como prop)
    <Text style={[styles.Text, style]} onPress={actulizaTexto}>
      {contenido}
    </Text>
  );
};
// COMPONENTE PRINCIPAL: App
// Este componente contiene toda la lógica y estructura de la pantalla principal.
export default function App() {
  // Estado booleano para controlar si está activado el modo oscuro
  const [modoOscuro, setModoOscuro] = useState(false);

  // Función que alterna el valor de modoOscuro (true <-> false)
  const alternarModoOscuro = () => setModoOscuro(previo => !previo);

  return (
    // Proveedor general de estilos de React Native Paper (obligatorio si usas componentes de esa librería)
    <ProveedorPaper>

      {/* ScrollView permite que el contenido sea desplazable si crece mucho */}
      <ScrollView contentContainerStyle={styles.ScrollContainer}>

        {/* Contenedor principal con color de fondo dinámico:
            - Si modoOscuro está activado, fondo oscuro '#111'
            - Si no, fondo claro '#fff' */}
        <View style={[styles.container, { backgroundColor: modoOscuro ? '#111' : '#fff' }]}>

          {/* Texto que muestra si estás en modo claro u oscuro */}
          <Text style={[styles.title, { color: modoOscuro ? '#fff' : '#000' }]}>
            Modo de pantalla: {modoOscuro ? 'Oscuro' : 'Claro'}
          </Text>

          {/* Switch permite cambiar entre modo claro y oscuro */}
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro} />

          {/* Componente de texto reutilizable con diferentes colores de fondo */}
          <Texto style={styles.azul} />
          <Texto style={styles.verde} />
          <Texto style={styles.negro} />
        </View>

        {/* Barra de estado del dispositivo */}
        <StatusBar style="auto" />

      </ScrollView>
    </ProveedorPaper>
  );
}
// ESTILOS DEFINIDOS CON StyleSheet

const styles = StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1, // Ocupa todo el alto de la pantalla
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    paddingHorizontal: 16, // Espacio lateral interno
    paddingBottom: 50 // Espacio inferior
  },

  // Estilo base del texto
  Text: {
    color: 'white', // Color de texto blanco
    fontSize: 27,   // Texto grande
    textAlign: 'center', // Centrado horizontal
    marginVertical: 10,  // Espaciado arriba y abajo
    padding: 10          // Espaciado interno
  },

  // Estilo para cada fondo de color
  azul: {
    backgroundColor: 'blue' // Fondo azul
  },
  verde: {
    backgroundColor: 'green' // Fondo verde
  },
  negro: {
    backgroundColor: 'black' // Fondo negro
  },

  // Estilo para el título "Modo de pantalla: Oscuro/Claro"
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center'
    // El color se modifica desde el componente App usando ternario
  },

  // Estilo para el contenedor del ScrollView
  ScrollContainer: {
    paddingVertical: 20 // Espacio vertical general del contenido scrollable
  }
});
