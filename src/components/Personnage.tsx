import { View, Text, StyleSheet } from 'react-native';

const Personnage = () => {
    return (
        <View style={styles.text}>
            <Text>Ada Lovelace, de son nom complet Augusta Ada King, comtesse de 
Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte 
le 27 novembre 1852 à Marylebone dans la même ville, est une 
pionnière de la science informatique.</Text>
        </View>
    );
}

export default Personnage;

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
});