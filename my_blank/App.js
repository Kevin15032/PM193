// Importamos React para poder usar JSX y crear componentes funcionales
// useState es un "hook" que nos permite manejar el estado de los componentes (si algo se muestra o no)
import React, { useState } from 'react';

// Importamos componentes de la librería 'react-native' que usaremos en la interfaz
import {
  Modal,        // Componente que permite mostrar una ventana emergente (como un popup)
  View,         // Contenedor visual, como un div en HTML
  Text,         // Para mostrar textos en pantalla
  StyleSheet,   // Herramienta para crear estilos de forma organizada
  Button,       // Botón básico que ya viene con diseño
  Pressable     // Botón más flexible y personalizable en diseño
} from 'react-native';
// Creamos el componente principal de la app, que será exportado para mostrarse en pantalla
export default function App() {
  // Definimos una variable de estado llamada modalVisible, que por defecto es "false"
  // Esta variable sirve para saber si el modal está abierto (true) o cerrado (false)
  const [modalVisible, setModalVisible] = useState(false);
  // Esta función se ejecuta cuando queremos abrir el modal (al presionar el botón)
  const handleOpenModal = () => {
    setModalVisible(true); // Cambiamos el estado a "true", así el modal se mostrará
  };

  // Esta función se ejecuta para cerrar el modal (cuando presionamos "Cerrar")
  const handleCloseModal = () => {
    setModalVisible(false); // Cambiamos el estado a "false", así el modal se ocultará
  };
  return (
    <View style={styles.container}>
      {/* Botón básico. Cuando se presiona, se ejecuta la función handleOpenModal */}
      <Button title="Mostrar Modal" onPress={handleOpenModal} />
      {/* Modal: ventana emergente que aparece encima del contenido */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        onShow={() => console.log("Modal mostrado")}
        onDismiss={() => console.log("Modal cerrado")}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¡Este es el contenido del modal!</Text>
            <Pressable style={styles.buttonClose} onPress={handleCloseModal}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


// Creamos un objeto con estilos usando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // El contenedor ocupa toda la pantalla
    justifyContent: 'center',  // Centrado vertical
    alignItems: 'center',      // Centrado horizontal
  },
  centeredView: {
    flex: 1,                                 // Ocupa todo el espacio disponible
    justifyContent: 'center',               // Centra el contenido verticalmente
    alignItems: 'center',                   // Centra el contenido horizontalmente
    backgroundColor: 'rgba(0,0,0,0.5)',     // Fondo negro con transparencia (0.5)
  },
  modalView: {
    margin: 20,                  // Espacio entre el modal y el borde de la pantalla
    backgroundColor: 'white',   // Fondo blanco
    borderRadius: 20,           // Bordes redondeados
    padding: 35,                // Espacio interno del cuadro
    alignItems: 'center',       // Centra su contenido horizontalmente
    elevation: 5,               // Sombra (solo para Android)
  },
  modalText: {
    marginBottom: 15,           // Espacio debajo del texto
    textAlign: 'center',        // Centrado
    fontSize: 18,               // Tamaño de letra más grande
  },
  buttonClose: {
    backgroundColor: '#2196F3', // Azul
    borderRadius: 10,           // Bordes redondeados
    padding: 10,                // Espaciado interno del botón
    elevation: 2,               // Sombra para que parezca elevado
  },
  textStyle: {
    color: 'white',             // Texto blanco para que contraste con el azul
    fontWeight: 'bold',         // Negrita
    textAlign: 'center',        // Centrado horizontal
  },
});
