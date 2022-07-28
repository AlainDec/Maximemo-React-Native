import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { UserContext, TContext } from '../utils/UserContext';
import Tabs from '../components/Tabs';
import TabsContent from '../components/TabsContent';
import TabsNewMemo from '../components/TabsNewMemo';
import FabMemo from '../components/FabMemo';

const HomeMemosScreen = () => {

    const [tabId, setTabId] = useState<number>(1);
    const [isFabMemo, setIsFabMemo] = useState<number>(0);

    return (
        <UserContext.Provider value={{ tabId, setTabId, isFabMemo, setIsFabMemo }}>
            <Tabs />
            {
                isFabMemo === 1 && <TabsNewMemo />
            }
            <TabsContent />

            {/* <Image
                source={require('../../assets/maximemo-logo.png')}
                style={styles.image}
            /> */}
            <FabMemo />
        </UserContext.Provider>
    );
}

export default HomeMemosScreen;

const styles = StyleSheet.create({
    text: {
        padding: 20
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain'
    }
});