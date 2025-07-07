// ✅ Zona 1: Importaciones necesarias

import React, { useState, useEffect } from 'react';

// Importamos componentes principales desde React Native
import {
  StatusBar,        // Controla la barra de estado (hora, señal, batería)
  StyleSheet,       // Permite crear estilos personalizados
  Text,             // Para mostrar texto
  ScrollView,       // Vista desplazable vertical u horizontal
  View              // Contenedor principal
} from 'react-native';

// SafeArea: asegura que el contenido no se solape con elementos del sistema (notch, barra superior)
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Importamos pantallas personalizadas
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
// ✅ Componente principal

export default function App() {
  // Estado para controlar si la app está en modo "cargando"
  const [isLoading, setIsLoading] = useState(true);

  // Efecto que simula una pantalla de carga por 2.5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Después de 2.5s cambia a HomeScreen
    }, 2500);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);
  // Si está cargando, mostramos la SplashScreen
  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden /> {/* Ocultamos barra superior durante la carga */}
        <SplashScreen />
      </View>
    );
  }

  // Si ya cargó, mostramos el contenido principal
  return (
    <SafeAreaProvider>
      {/* SafeAreaView protege el contenido de solaparse con la barra superior o bordes del sistema */}
      <SafeAreaView style={styles.container} edges={['top']}>

        {/* ScrollView externo (horizontal) */}
        <ScrollView style={styles.scrollView} horizontal={true}>

          {/* ScrollView interno (vertical) */}
          <ScrollView>

            {/* Texto largo que activa el desplazamiento vertical */}
            <Text style={styles.text}>
              {/* Texto repetido para provocar scroll */}
              Este es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
              Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
              Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
              Puedes personalizar los estilos según tus necesidades.

              {"\n\n"} {/* Salto de línea */}
              Repite varias veces para forzar scroll...

              Este es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
              Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
              Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
              Puedes personalizar los estilos según tus necesidades.

              {"\n\n"}
              Este es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
              Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
              Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
              Puedes personalizar los estilos según tus necesidades.

              {"\n\n"}
              Y así sucesivamente...
            </Text>

          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
// ✅ Zona de estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,                           // Ocupa toda la pantalla
    paddingTop: StatusBar.currentHeight || 0, // Evita que el contenido se superponga con la barra de estado
    padding: 20,                       // Espaciado general
    backgroundColor: '#f4f4f4',
  },
  scrollView: {
    backgroundColor: '#d0f0c0',        // Verde claro para mostrar visualmente el área desplazable
  },
  text: {
    fontSize: 18,
    padding: 16,
    color: '#333',
    lineHeight: 26,
  },
});
