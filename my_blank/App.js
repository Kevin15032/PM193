// ✅ Zona 1: IMPORTACIONES NECESARIAS

// React y useState para manejar valores de campos y switches
import React, { useState } from 'react';

// Componentes principales de la interfaz de usuario
import {
  StatusBar,              // Controla el estilo de la barra de estado del sistema
  StyleSheet,             // Para definir estilos personalizados
  Text,                   // Para mostrar texto
  View,                   // Contenedor flexible de elementos
  TextInput,              // Campo de entrada de texto
  Switch,                 // Componente de activación tipo ON/OFF
  Alert,                  // Para mostrar alertas emergentes
  Image,                  // Para mostrar imágenes estáticas
  TouchableOpacity,       // Componente que responde al toque con opacidad
  ImageBackground,        // Imagen de fondo que envuelve todo el contenido
  ScrollView              // Permite hacer scroll si el contenido es largo
} from 'react-native';

// Carga de imágenes locales
const logo = require('./assets/logo.jpeg');        // Imagen de logo que se muestra arriba
const background = require('./assets/fondo1.jpeg'); // Imagen que se usa como fondo de pantalla
// ✅ COMPONENTE PRINCIPAL

export default function App() {
  // 🎯 Estados controlados con useState
  const [nombre, setNombre] = useState('');               // Guarda el nombre ingresado
  const [correo, setCorreo] = useState('');               // Guarda el correo ingresado
  const [aceptarTerminos, setAceptarTerminos] = useState(false); // Switch ON/OFF para aceptar términos

  // ✅ VALIDACIÓN DE FORMATO DE CORREO USANDO REGEX
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // RegEx que valida el formato correcto de email
  // 🔔 FUNCIÓN QUE SE EJECUTA AL PRESIONAR "Registrarse"
  const handleRegistro = () => {
    // Valida que los campos no estén vacíos
    if (nombre === '' || correo === '') {
      Alert.alert('Error', 'No puede haber campos vacíos');
      return;
    }

    // Valida que el correo tenga un formato válido
    if (!isValidEmail(correo)) {
      Alert.alert('Error', 'Correo electrónico inválido');
      return;
    }

    // Valida que el usuario haya aceptado los términos
    if (!aceptarTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    // Si todo está correcto, muestra mensaje de éxito
    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };
  // ✅ RETORNO DE LA INTERFAZ
  return (
    // Componente de fondo con imagen
    <ImageBackground source={background} style={styles.background}>
      
      {/* Contenedor scrollable para evitar desbordamientos */}
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Imagen del logo superior */}
        <Image source={logo} style={styles.logo} />

        {/* Campo de entrada para el nombre */}
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.Input}
          placeholder='Ingresa nombre'
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Campo de entrada para correo */}
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.Input}
          placeholder='Ingresa correo'
          value={correo}
          onChangeText={setCorreo}
        />

        {/* Switch de aceptación de términos */}
        <View style={styles.SwitchContainer}>
          <Switch value={aceptarTerminos} onValueChange={setAceptarTerminos} />
          <Text style={styles.switchLabel}>Acepto los términos y condiciones</Text>
        </View>

        {/* Botón de registro */}
        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        {/* Barra de estado superior */}
        <StatusBar style="auto" />
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  // Estilo de fondo con imagen que cubre toda la pantalla
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta imagen al tamaño
  },

  // Estilo del contenedor principal
  container: {
    flexGrow: 1,
    alignItems: 'center',         // Centra horizontalmente
    justifyContent: 'center',     // Centra verticalmente
    paddingVertical: 40,          // Espaciado superior e inferior
  },

  // Estilo de la imagen del logo
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  // Estilo del texto de las etiquetas (Nombre, Correo, etc.)
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },

  // Estilo del campo de texto
  Input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  // Contenedor del switch y su texto
  SwitchContainer: {
    flexDirection: 'row',         // Elementos en fila
    alignItems: 'center',
    marginBottom: 20,
  },

  // Estilo del texto al lado del switch
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },

  // Estilo del botón de registro
  button: {
    backgroundColor: '#007BFF',   // Azul brillante
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },

  // Texto dentro del botón
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
