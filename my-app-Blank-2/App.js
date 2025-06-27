import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, Alert, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const logo = require('./assets/logo.jpeg'); //carga
const background = require('./assets/fondo1.jpeg'); //fondo

export default function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);


  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegistro = () => {
    if (nombre === '' || correo === '') {
      Alert.alert('Error', 'No puede haber campos vacíos');
      return;
    }
    if (!isValidEmail(correo)) {
      Alert.alert('Error', 'Correo electrónico inválido');
      return;
    }
    if (!aceptarTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }
    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.Input}
          placeholder='Ingresa nombre'
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Correo Electronico:</Text>
        <TextInput
          style={styles.Input}
          placeholder='Ingresa correo'
          value={correo}
          onChangeText={setCorreo}
        />

        <View style={styles.SwitchContainer}>
          <Switch value={aceptarTerminos} onValueChange={setAceptarTerminos} />
          <Text style={styles.switchLabel}>Acepto los términos y condiciones</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
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
  SwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
