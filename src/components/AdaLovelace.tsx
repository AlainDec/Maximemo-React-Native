import { Image, View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const AdaLovelace = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('./ada-lovelace.png')}
                style={styles.image}
            />
            <View>
                <Text style={styles.text}>Ada Lovelace</Text>
                <Button 
                    onPress={() => navigation.navigate('Home')}
                    title="retour vers l'accueil"
                />
            </View>
        </View>
    );
}

export default AdaLovelace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    text: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain'
    }
});