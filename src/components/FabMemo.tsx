import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import { UserContext } from '../utils/UserContext';

const FabMemo = () => {

    let { isFabMemo, setIsFabMemo } = useContext(UserContext);
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }: any) => setState({ open });
    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    backdropColor={'#00000055'}
                    color={'white'}
                    fabStyle={styles.fabBgColor}
                    visible={true}
                    open={open}
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        {
                            icon: 'draw',
                            label: 'Dessin à main levée',
                            color: '#00598b',
                            onPress: () => {
                                setIsFabMemo(5);
                                console.log('Dessin à main levée')
                            },
                        },
                        {
                            icon: 'camera',
                            label: 'Prendre une photo',
                            color: '#00598b',
                            onPress: () => {
                                setIsFabMemo(4);
                                console.log('Prendre une photo')
                            },
                        },
                        {
                            icon: 'file-image-plus',
                            label: 'Ajouter une photo',
                            color: '#00598b',
                            onPress: () => {
                                setIsFabMemo(3);
                                console.log('Ajouter une photo')
                            },
                        },
                        {
                            icon: 'tab-plus',
                            label: 'Ajouter une rubrique',
                            color: '#00598b',
                            onPress: () => {
                                setIsFabMemo(2);
                                console.log('Ajouter une rubrique')
                            },
                        },
                        {
                            icon: 'note-plus-outline',
                            label: 'Ajouter un mémo',
                            color: '#00598b',
                            onPress: () => {
                                setIsFabMemo(1);
                                console.log('Ajouter un mémo')
                            },
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>
    );
}

export default FabMemo;

const styles = StyleSheet.create({
    fabBgColor: {
        backgroundColor: '#00598b'
    }
})