import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const PLACEHOLDER_IMAGE = 'https://source.unsplash.com/600x400/?restaurant';

const App = () => {
  const [foodType, setFoodType] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const deg2rad = (deg) => deg * (Math.PI / 180);
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleSearch = async () => {
    if (!foodType || !city) {
      setError('Por favor ingrese tipo de comida y ciudad');
      return;
    }

    setLoading(true);
    setError('');
    setRestaurants([]);

    try {
      // 1️⃣ Obtener coordenadas de la ciudad
      const geoResponse = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: { q: city, format: 'json', limit: 1 },
      });

      if (!geoResponse.data || geoResponse.data.length === 0) {
        setError('Ciudad no encontrada');
        setLoading(false);
        return;
      }

      const lat = parseFloat(geoResponse.data[0].lat);
      const lon = parseFloat(geoResponse.data[0].lon);

      // 2️⃣ Construir consulta Overpass para lugares cerca del centro
      const overpassQuery = `
        [out:json][timeout:25];
        (
          node["amenity"="restaurant"]["cuisine"~"${foodType}",i](around:2000,${lat},${lon});
          node["amenity"="restaurant"](around:2000,${lat},${lon});
        );
        out body;
      `;

      const overpassResponse = await axios.post('https://overpass-api.de/api/interpreter', overpassQuery, {
        headers: { 'Content-Type': 'text/plain' },
      });

      let elements = overpassResponse.data.elements;
      if (elements.length === 0) {
        setError('No se encontraron restaurantes');
      } else {
        // 3️⃣ Calcular distancia
        elements = elements.map(el => ({
          ...el,
          distance: getDistanceFromLatLonInKm(lat, lon, el.lat, el.lon).toFixed(2)
        }));
        setRestaurants(elements);
      }
    } catch (err) {
      console.error('Error:', err.message);
      setError('Error al obtener los datos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Buscar Restaurantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo de comida (ej: sushi)"
        value={foodType}
        onChangeText={setFoodType}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad (ej: Guadalajara)"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Buscar" onPress={handleSearch} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          {restaurants.map((rest, index) => (
            <View key={index} style={styles.restaurant}>
              <Image
                source={{ uri: PLACEHOLDER_IMAGE }}
                style={styles.image}
              />
              <Text style={styles.name}>{rest.tags?.name || 'Restaurante sin nombre'}</Text>
              <Text style={styles.info}>🍜 Tipo: {rest.tags?.cuisine || 'Desconocido'}</Text>
              <Text style={styles.info}>⭐ Calificación: {Math.floor(Math.random() * 3) + 3} / 5</Text>
              <Text style={styles.info}>📍 Distancia: {rest.distance} km</Text>
              <Text style={styles.info}>🏠 Dirección: {rest.tags?.addr_full || 'No disponible'}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8, borderRadius: 8 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  restaurant: { marginBottom: 20, padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 10, backgroundColor: '#f9f9f9' },
  image: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  info: { fontSize: 14, marginBottom: 2 },
});

export default App;
