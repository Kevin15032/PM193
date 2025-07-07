// ✅ Importaciones necesarias
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
// ✅ Componente principal
const App = () => {

  // Estado para saber si está cargando o ya se descargaron los datos
  const [loading, setLoading] = useState(true);

  // Estado para guardar los usuarios descargados
  const [users, setUsers] = useState([]);

  // ✅ useEffect: se ejecuta una vez al montar el componente
  useEffect(() => {
    // Simulamos un tiempo de espera (2 segundos) antes de hacer fetch
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users') // API falsa para pruebas
        .then(resp => resp.json())
        .then(data => {
          setUsers(data);      // Guardamos los usuarios
          setLoading(false);   // Quitamos el indicador de carga
        })
        .catch(err => {
          console.error('Error al cargar usuarios: ', err);
          setLoading(false);   // Quitamos el loading si hay error
        });
    }, 2000);
  }, []);
  // ✅ Render individual de cada usuario en la lista
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}> {item.name} </Text>
      <Text style={styles.text}> {item.email} </Text>
      <Text style={styles.text}> {item.address.city} </Text>
      <Text style={styles.text}> {item.company.name} </Text>
    </View>
  );
  // ✅ Interfaz principal
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Si está cargando, mostramos el ActivityIndicator */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Cargando usuarios...</Text>
        </View>
      ) : (
        // Si ya cargó, mostramos la lista
        <FlatList
          data={users}                           // Lista de usuarios
          keyExtractor={item => item.id.toString()}  // Clave única para cada elemento
          renderItem={renderItem}               // Qué renderizar por cada ítem
          contentContainerStyle={styles.list}   // Estilo de la lista
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                        // Ocupa todo el alto de la pantalla
    paddingTop: StatusBar.currentHeight || 0,
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,                        // Centrar vertical
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // sombra en Android
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
});
