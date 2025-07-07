// 🔹 Zona 1: Importaciones
// Importamos React y useState para manejar estados
import React, { useState } from 'react';

// Importamos componentes nativos de React Native
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Switch,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable
} from 'react-native';

// Importamos botones personalizados desde librerías externas
import { Provider as ProveedorPaper, Button as ButtonPaper } from 'react-native-paper';
import { Button as ButtonElements } from 'react-native-elements';

// 🔹 Zona 2: Componente principal App

export default function App() {
  // Estado que controla si el modo oscuro está activado o no
  const [modoOscuro, setModoOscuro] = useState(false);

  // Función para alternar entre modo oscuro y claro
  const alternarModoOscuro = () => setModoOscuro(previo => !previo);

  return (
    <ProveedorPaper>
      {/* ScrollView permite desplazar los elementos si hay muchos botones */}
      <ScrollView contentContainerStyle={styles.ScrollContainer}>

        {/* Contenedor con fondo dinámico según modoOscuro */}
        <View style={[styles.container, { backgroundColor: modoOscuro ? '#111' : '#fff' }]}>
          <Text style={[styles.title, { color: modoOscuro ? '#fff' : '#000' }]}>
            Modo de pantalla: {modoOscuro ? 'Oscuro' : 'Claro'}
          </Text>

          {/* Switch que activa o desactiva el modo oscuro */}
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro} />
        </View>

        {/* 🔘 Botón 1: Botón nativo */}
        <View style={styles.section}>
          <Text style={styles.title}>1. Botón Nativo</Text>
          <Button
            title="Botón Nativo"
            color="#007bff"
            onPress={() => Alert.alert('Botón Nativo Presionado')}
          />
        </View>

        {/* 🔘 Botón 2: TouchableOpacity */}
        <View style={styles.section}>
          <Text style={styles.title}>2. TouchableOpacity</Text>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#28a745' }]}
            onPress={() => Alert.alert('TouchableOpacity')}
          >
            <Text style={styles.btnText}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>

        {/* 🔘 Botón 3: TouchableHighlight */}
        <View style={styles.section}>
          <Text style={styles.title}>3. TouchableHighlight</Text>
          <TouchableHighlight
            style={[styles.btn, { backgroundColor: '#ffc107' }]}
            underlayColor="#e0a800"
            onPress={() => Alert.alert('Botón 3')}
          >
            <Text style={styles.btnText}>TouchableHighlight</Text>
          </TouchableHighlight>
        </View>

        {/* 🔘 Botón 4: TouchableWithoutFeedback */}
        <View style={styles.section}>
          <Text style={styles.title}>4. Sin Retroalimentación Visual</Text>
          <TouchableWithoutFeedback onPress={() => Alert.alert('¡Sin retroalimentación visual!')}>
            <View style={[styles.btn, { backgroundColor: '#17a2b8' }]}>
              <Text style={styles.btnText}>Sin retroalimentación</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* 🔘 Botón 5: Pressable */}
        <View style={styles.section}>
          <Text style={styles.title}>5. Pressable (Presionado)</Text>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: pressed ? '#6c757d' : '#343a40' },
            ]}
            onPress={() => Alert.alert('¡Presionaste Pressable!')}
          >
            <Text style={styles.btnText}>Pressable</Text>
          </Pressable>
        </View>

        {/* 🔘 Botón 6: Button de React Native Paper */}
        <View style={styles.section}>
          <Text style={styles.title}>6. Botón de Paper</Text>
          <ButtonPaper
            mode="contained"
            buttonColor="#9c27b0"
            textColor="#fff"
            onPress={() => Alert.alert('¡Presionaste el botón de Paper!')}
            style={styles.paperButton}
          >
            Botón de Papel
          </ButtonPaper>
        </View>

        {/* 🔘 Botón 7: Button de React Native Elements */}
        <View style={styles.section}>
          <Text style={styles.title}>7. Botón de Elements</Text>
          <ButtonElements
            title="Botón Elements"
            onPress={() => Alert.alert('¡Presionaste el botón de Elements!')}
            buttonStyle={{
              backgroundColor: '#ff5722',
              borderRadius: 10,
              padding: 10,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
          />
        </View>

        {/* Barra de estado superior */}
        <StatusBar style="auto" />
      </ScrollView>
    </ProveedorPaper>
  );
}
// 🔹 Zona 3: Estilos con StyleSheet

const styles = StyleSheet.create({
  // Contenedor base
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },

  // Estilo general para el título
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },

  // Contenedor de cada sección (título + botón)
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },

  // Estilo base para botones personalizados
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },

  // Estilo del texto dentro de los botones personalizados
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  // Estilo del botón de Paper
  paperButton: {
    marginTop: 5,
    width: 220,
  },

  // Contenedor para scroll
  ScrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

