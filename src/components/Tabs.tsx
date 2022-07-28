import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { tabsData } from '../utils/Data';
import { bgColors } from '../utils/Colors';
import { TTab, TTabContent } from '../types';
import { UserContext, TContext } from '../utils/UserContext';
//import Ionicons from 'react-native-vector-icons/Ionicons'; <Ionicons name="home" size={16} color="white" />

const Tabs = () => {

    const {tabId, setTabId} = useContext(UserContext);
    const [tab, setTab] = useState<TTab[]>(tabsData);

    const changeRubric = (id: number) => {
        // tabId passé dans le useContext
        setTabId(id);

        return tab.map(item => {
            // Modification de la valeur de la propriété 'actif'
            let temp = Object.assign({}, item);
            if (temp.id === id) {
                temp.actif = true;
            } else {
                temp.actif = false;
            }
            return temp;
        });
    }

    return (
        <View style={styles.container}>
            {
                tab.map(item => {
                    return (
                        <Pressable
                            key={item.id}
                            onPress={() => { setTab(changeRubric(item.id)) }}>
                                
                            <View style={[styles.button, {backgroundColor: bgColors[item.color]}, {flexDirection: 'row'}]}>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>

                            { item.actif && <View style={[styles.buttonActif]}></View>}

                        </Pressable>
                    )
                })
            }
        </View>
    )
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        padding: 5,
        paddingBottom: 0,
        backgroundColor: '#eff6f9',
        flexWrap: 'wrap',    },
    button: {
        height: 40,
        marginRight: 2,
        marginBottom: 2,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    buttonActif: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 2,
        width: 'auto',
        height: 5,
        backgroundColor: '#00598b',
    },
    text: {
        color: 'white'
    },
    color0: {
        backgroundColor: '#98bdd2',
    },
    color1: {
        backgroundColor: '#d29898',
    },
    color2: {
        backgroundColor: '#cc98d2',
    },
    color3: {
        backgroundColor: '#9d98d2',
    },
    color4: {
        backgroundColor: '#dcc33e',
    },
    color5: {
        backgroundColor: '#9ad298',
    },
});