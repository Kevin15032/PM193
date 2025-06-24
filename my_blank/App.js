/* Zona 1: Lugar de las importaciones */  
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,Button,Alert,ScrollView, TextInput} from 'react-native';
import React, { useState } from 'react';
import { Button as ButtonPaper, Provider as ProveedorPaper } from 'react-native-paper'; 
import { Button as ButtonElements } from 'react-native-elements';

/* Zona 2: Main */
export default function App() {

  // Estados para los campos de entrada
  const [email, setEmail] = useState('');
  const [defaultText, onChangeDefault] = useState('');
  const [numberPadText, setNumberPadText] = useState('');
  const [decimalPadText, setDecimalPadText] = useState('');
  const [numericText, setNumericText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [urlText, setUrlText] = useState('');
  const [visiblePassword, setVisiblePassword] = useState('');

  // Funciones de validación para email y teléfono
  const isValidEmail =  (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{7,15}$/.test(phone);

  // Validaciones adicionales
  const isValidUrl = (url) => /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*\/?$/.test(url);
  const isNumeric = (value) => /^[0-9]+$/.test(value);
  const isDecimal = (value) => /^[0-9]*\.?[0-9]+$/.test(value);

  // Función para mostrar una alerta básica
  const AlertaBasica = () => {
    window.alert('Alerta Básica', '¡Hola, este es un mensaje de alerta!');
  }

  // Función para mostrar una alerta de confirmación
  const AlertaConfirmcaion= () => {
    const confirmacion = window.confirm('Gus es gustabo?');
    if (confirmacion){
      window.alert('Exactamente');
    } else {
      window.alert('No es cierto');
    }
  }

  // Función para mostrar una alerta con texto ingresado
  const AlertTexto= () => {
    const confirmacion = window.prompt('Erick esta aqui?');
    if (confirmacion){
      window.alert('Exactamente,'+ confirmacion);
    } else {
      window.alert('No es cierto');
    }
  }

  // Función para mostrar una alerta condicional según la edad
  const AlertCondicional= () => {
    const confirmacion = window.prompt('Que edad tienes?');
    const edad = parseInt(confirmacion);
    if (edad >= 1 && edad <= 70){
      window.alert('Tu edad es: ' + edad);
    } else {
      window.alert('Edad no valida');
    }
  }

  // Función para mostrar una alerta después de 5 segundos
  const alertaTiempo = () => {
    setTimeout(() => {
      window.alert('Alerta después de 5 segundos');
    }, 5000);
  }

  // Renderizado de la interfaz
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Campo de entrada para email */}
      <Text style={styles.label}>Ingrese su correo electrónico:</Text>
      <TextInput
        style={styles.input}
        value={emailText}
        onChangeText={setEmailText}
        placeholder="Ingresa tu correo"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* Mensaje de error si el email no es válido */}
      {!isValidEmail(emailText) && emailText !== '' && (
        <Text style={styles.errorText}>Correo inválido</Text>
      )}

      <Text style={styles.label}>default: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDefault}
        value={defaultText}
        placeholder="Escribe solo texto"
        keyboardType="default"
      />

      <Text style={styles.label}>number-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa solo números"
        keyboardType="number-pad"
        value={numberPadText}
        onChangeText={(text) => {
          if (isNumeric(text) || text === '') setNumberPadText(text);
        }}
      />

      <Text style={styles.label}>decimal-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números decimales"
        keyboardType="decimal-pad"
        value={decimalPadText}
        onChangeText={(text) => {
          if (isDecimal(text) || text === '') setDecimalPadText(text);
        }}
      />

      <Text style={styles.label}>numeric: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números"
        keyboardType="numeric"
        value={numericText}
        onChangeText={(text) => {
          if (isNumeric(text) || text === '') setNumericText(text);
        }}
      />

      <Text style={styles.label}>email-address: </Text>
      <TextInput
        style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
        placeholder="Ingresa correo electrónico"
        keyboardType="email-address"
        value={emailText}
        onChangeText={setEmailText}
        autoCapitalize="none"
      />
      {!isValidEmail(emailText) && emailText !== '' && (
        <Text style={styles.errorText}>Correo inválido</Text>
      )}

      <Text style={styles.label}>phone-pad: </Text>
      <TextInput
        style={[styles.input, !isValidPhone(phoneText) && phoneText ? styles.errorInput : null]}
        placeholder="Ingresa teléfono"
        keyboardType="phone-pad"
        value={phoneText}
        onChangeText={setPhoneText}
      />
      {!isValidPhone(phoneText) && phoneText !== '' && (
        <Text style={styles.errorText}>Teléfono inválido</Text>
      )}

      <Text style={styles.label}>url:</Text>
      <TextInput
        style={[styles.input, !isValidUrl(urlText) && urlText ? styles.errorInput : null]}
        placeholder="Ingresa URL"
        keyboardType="url"
        value={urlText}
        onChangeText={setUrlText}
        autoCapitalize="none"
      />
      {!isValidUrl(urlText) && urlText !== '' && (
        <Text style={styles.errorText}>URL inválida</Text>
      )}

      <Text style={styles.label}>visible-password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa Contraseña"
        keyboardType="visible-password"
        value={visiblePassword}
        onChangeText={setVisiblePassword}
        secureTextEntry={false}
        autoCapitalize="none"
      />

      {/* Botones para mostrar diferentes tipos de alertas */}
      <Button title='Alerta Basica' onPress={AlertaBasica}></Button>
      <Button title='Alerta de Confirmación' onPress={AlertaConfirmcaion}></Button>
      <Button title='Alerta Erick' onPress={AlertTexto}></Button>
      <Button title='Alerta Condicional' onPress={AlertCondicional}></Button>
      <Button title='Alerta con Tiempo' onPress={alertaTiempo}></Button>

      <StatusBar style="auto" />
    </ScrollView>
  );
}


/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },
});