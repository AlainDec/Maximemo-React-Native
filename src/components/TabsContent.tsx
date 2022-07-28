import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { tabsData } from '../utils/Data';
import { bgColors } from '../utils/Colors';
import { TTab, TTabContent } from '../types';
import { UserContext } from '../utils/UserContext';

const TabsContent = () => {

    let { tabId } = useContext(UserContext);

    return (
        <View style={styles.container}>
            {
                tabsData.filter(item => {
                    if (item.id === tabId) {
                        console.log(item);
                        return item;
                    }
                })
                    .map((item) => {
                        return (
                            item.data !== undefined ?
                                (
                                    item.data?.map((item: TTabContent) => {
                                        return (
                                            <View key={item.id}>
                                                <Text style={styles.title}>{item.title}</Text>
                                                <Text style={styles.content}>{item.content}</Text>
                                                <View style={styles.line}></View>
                                            </View>
                                        )
                                    })
                                )
                                :
                                (
                                    <Text key={0} style={styles.contentEmpty}>Aucun mémo dans cette rubrique</Text>
                                )
                        )
                    })
            }
        </View>
    )
}

export default TabsContent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
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
    }
});
