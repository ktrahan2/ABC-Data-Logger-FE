import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default function EmptyGraphSplash() {
    return (
        <View style={styles.splashContainer}>
            <Image 
                style={styles.image} 
                source={require('../assets/graph-splash.png')}
                zIndex={1000}
            />
            <Text style={styles.splashText}>Select from the dropdown menus to generate a graph showing the frequency of behavior.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 50
    },
    image: {
        height: 220,
        width: 220,
    },
    splashText: {
        color: 'gray',
        fontSize: 14,
        marginTop: 10,
        width: 300,
        textAlign: 'center'
    }
})
