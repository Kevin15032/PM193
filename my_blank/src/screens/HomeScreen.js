import React from "react";
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('C:/Users/kdtor/OneDrive/Escritorio/PM193/PM193/my_blank/src/assets/f.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Pantalla Principal</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
   background: {
        flex: 1,
        justifyContent: 'center',

    },
    content: {
        alignItems: 'center',
       
    },
    Text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },

})