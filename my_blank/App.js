// ✅ Zona 1: IMPORTACIONES

// React y el hook useState para controlar los valores ingresados y estados internos
import React, { useState } from 'react';

// Componentes principales de React Native
import {
  StyleSheet,        // Para crear estilos
  Text,              // Mostrar texto en pantalla
  View,              // Contenedor de elementos
  ScrollView,        // Hacer scroll si hay muchos elementos
  StatusBar,         // Barra de estado del sistema
  TextInput,         // Campos de entrada
  Button,            // Botones nativos
  Switch,            // Interruptor tipo ON/OFF
  Alert              // Para mostrar ventanas emergentes
} from 'react-native';

// Botón y proveedor visual de la librería react-native-paper (estética moderna)
import { Provider as ProveedorPaper, Button as ButtonPaper } from 'react-native-paper';

// Botón de la librería react-native-elements (personalización e iconos)
import { Button as ButtonElements } from 'react-native-elements';
// ✅ Zona 2: COMPONENTE PRINCIPAL

export default function App() {
  // 🔁 Estado para controlar el modo oscuro (ON/OFF)
  const [modoOscuro, setModoOscuro] = useState(false);

  // 🔄 Función que invierte el valor de modoOscuro (true/false)
  const alternarModoOscuro = () => setModoOscuro(previo => !previo);

  // 🧠 Estados para cada campo de entrada
  const [emailText, setEmailText] = useState('');
  const [defaultText, onChangeDefault] = useState('');
  const [numberPadText, setNumberPadText] = useState('');
  const [decimalPadText, setDecimalPadText] = useState('');
  const [numericText, setNumericText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [urlText, setUrlText] = useState('');
  const [visiblePassword, setVisiblePassword] = useState('');
  // ✅ VALIDACIONES USANDO REGEX (expresiones regulares)

  // Valida si el texto es un correo electrónico válido
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Valida si el texto es un número de teléfono entre 7 y 15 dígitos
  const isValidPhone = (phone) =>
    /^[0-9]{7,15}$/.test(phone);

  // Valida si el texto es una URL válida
  const isValidUrl = (url) =>
    /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*\/?$/.test(url);

  // Valida si el texto solo contiene números enteros
  const isNumeric = (value) =>
    /^[0-9]+$/.test(value);

  // Valida si el texto contiene números decimales
  const isDecimal = (value) =>
    /^[0-9]*\.?[0-9]+$/.test(value);
  // ✅ FUNCIONES DE ALERTA

  // Alerta simple con un mensaje
  const AlertaBasica = () => {
    Alert.alert('Alerta Básica', '¡Hola, este es un mensaje de alerta!');
  };

  // Alerta con botones de confirmación
  const AlertaConfirmacion = () => {
    Alert.alert(
      '¿Gus es Gustavo?',
      'Confirma tu respuesta',
      [
        { text: 'No', onPress: () => Alert.alert('No es cierto') },
        { text: 'Sí', onPress: () => Alert.alert('Exactamente') }
      ]
    );
  };

  // Alerta con entrada de texto (solo en iOS funciona `Alert.prompt`)
  const AlertTexto = () => {
    Alert.prompt(
      '¿Erick está aquí?',
      'Escribe tu respuesta',
      text => Alert.alert('Exactamente, ' + text)
    );
  };

  // Alerta que evalúa un valor ingresado (edad)
  const AlertCondicional = () => {
    Alert.prompt('¿Qué edad tienes?', '', input => {
      const edad = parseInt(input);
      if (edad >= 1 && edad <= 70) {
        Alert.alert('Tu edad es: ' + edad);
      } else {
        Alert.alert('Edad no válida');
      }
    });
  };

  // Alerta que aparece después de 5 segundos
  const alertaTiempo = () => {
    setTimeout(() => {
      Alert.alert('Alerta después de 5 segundos');
    }, 5000);
  };
  // ✅ RENDERIZADO DE LA INTERFAZ

  return (
    <ProveedorPaper>
      {/* ScrollView permite desplazarse si el contenido excede la pantalla */}
      <ScrollView contentContainerStyle={styles.container}>

        {/* 🔘 SWITCH DE MODO OSCURO */}
        <View style={[styles.section, { backgroundColor: modoOscuro ? '#111' : '#fff' }]}>
          <Text style={[styles.title, { color: modoOscuro ? '#fff' : '#000' }]}>
            Modo de pantalla: {modoOscuro ? 'Oscuro' : 'Claro'}
          </Text>
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro} />
        </View>
        {/* 🧾 CAMPOS DE TEXTO */}

        {/* Campo de correo electrónico con validación */}
        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={[
            styles.input,
            !isValidEmail(emailText) && emailText ? styles.errorInput : null
          ]}
          placeholder="ejemplo@correo.com"
          value={emailText}
          onChangeText={setEmailText}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isValidEmail(emailText) && emailText !== '' && (
          <Text style={styles.errorText}>Correo inválido</Text>
        )}

        {/* Campo default (texto libre) */}
        <Text style={styles.label}>Texto libre:</Text>
        <TextInput
          style={styles.input}
          value={defaultText}
          onChangeText={onChangeDefault}
          placeholder="Escribe texto"
          keyboardType="default"
        />

        {/* Campo numérico (solo números enteros) */}
        <Text style={styles.label}>Solo números (number-pad):</Text>
        <TextInput
          style={styles.input}
          value={numberPadText}
          onChangeText={text => {
            if (isNumeric(text) || text === '') setNumberPadText(text);
          }}
          keyboardType="number-pad"
        />

        {/* Campo decimal */}
        <Text style={styles.label}>Números decimales (decimal-pad):</Text>
        <TextInput
          style={styles.input}
          value={decimalPadText}
          onChangeText={text => {
            if (isDecimal(text) || text === '') setDecimalPadText(text);
          }}
          keyboardType="decimal-pad"
        />

        {/* Campo numérico general */}
        <Text style={styles.label}>Números (numeric):</Text>
        <TextInput
          style={styles.input}
          value={numericText}
          onChangeText={text => {
            if (isNumeric(text) || text === '') setNumericText(text);
          }}
          keyboardType="numeric"
        />

        {/* Teléfono con validación */}
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={[
            styles.input,
            !isValidPhone(phoneText) && phoneText ? styles.errorInput : null
          ]}
          value={phoneText}
          onChangeText={setPhoneText}
          placeholder="Ej: 5533221144"
          keyboardType="phone-pad"
        />
        {!isValidPhone(phoneText) && phoneText !== '' && (
          <Text style={styles.errorText}>Teléfono inválido</Text>
        )}

        {/* URL con validación */}
        <Text style={styles.label}>URL:</Text>
        <TextInput
          style={[
            styles.input,
            !isValidUrl(urlText) && urlText ? styles.errorInput : null
          ]}
          value={urlText}
          onChangeText={setUrlText}
          placeholder="https://misitio.com"
          keyboardType="url"
          autoCapitalize="none"
        />
        {!isValidUrl(urlText) && urlText !== '' && (
          <Text style={styles.errorText}>URL inválida</Text>
        )}

        {/* Contraseña visible */}
        <Text style={styles.label}>Contraseña (visible):</Text>
        <TextInput
          style={styles.input}
          value={visiblePassword}
          onChangeText={setVisiblePassword}
          placeholder="Contraseña"
          keyboardType="visible-password"
          secureTextEntry={false}
          autoCapitalize="none"
        />
        {/* ✅ BOTONES PARA ALERTAS */}
        <Button title="Alerta Básica" onPress={AlertaBasica} />
        <Button title="Alerta de Confirmación" onPress={AlertaConfirmacion} />
        <Button title="Alerta con Texto" onPress={AlertTexto} />
        <Button title="Alerta Condicional (edad)" onPress={AlertCondicional} />
        <Button title="Alerta con tiempo (5s)" onPress={alertaTiempo} />

        <StatusBar style="auto" />
      </ScrollView>
    </ProveedorPaper>
  );
}
// ✅ Zona 3: ESTILOS

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,             // Permite que ScrollView se expanda
    padding: 20,             // Espacio interno general
    backgroundColor: '#f4f4f4',
  },
  section: {
    marginBottom: 20,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 6,
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 6,
  },
});
