import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { tabsData } from '../utils/Data';
import { bgColors } from '../utils/Colors';
import { TTab, TTabContent } from '../types';
import { UserContext } from '../utils/UserContext';
//import { TextInput } from 'react-native-paper';

const FormMemo = () => {

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder={"Titre"}
                    placeholderTextColor={'gray'}
                    style={[styles.input, styles.inputTitle]}

                />
                <TextInput
                    multiline={true}
                    autoFocus={true}
                    placeholder={"Ecrire un mémo"}
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    onBlur={() => console.log("onBlur multiline")}
                    onPressOut={() => console.log("onPressOut multiline")}
                    onEndEditing={() => console.log("onEndEditing multiline")}
                />
            </View>
        </View>
    )
}

export default FormMemo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff3cc',
        marginHorizontal: 5,
        marginTop: 0,
    },
    title: {
        fontWeight: 'bold',
        padding: 5,
    },
    content: {
        padding: 5,
        fontWeight: 'normal',
    },
    contentEmpty: {
        padding: 5,
        fontStyle: 'italic',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#98bdd2',
    },
    input: {
        padding: 10,
        backgroundColor: '#fff3cc',
        fontStyle: 'italic',
    },
    inputTitle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
});
