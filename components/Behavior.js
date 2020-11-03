import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Behavior({navigation, incident, setIncident, caseInfo}) {

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.labelHeader}>B: Behavior</Text>
            </View>
            <View style={styles.selectionContainer}>
                <DropDownPicker
                    labelStyle={{fontSize: 24, color: 'black', padding: 10}}
                    items={[
                        {label: 'Refusal to follow directions', value: 'Refusal to follow directions'},
                        {label: 'Verbal refusal', value: 'Verbal refusal'},
                        {label: 'Making verabl threats', value: 'Making verabl threats'},
                        {label: 'Crying/whining', value: 'Crying/whining'},
                        {label: 'Screaming/yelling', value: 'Screaming/yelling'},
                        {label: 'Scratching', value: 'Scratching'},
                        {label: 'Biting', value: 'Biting'},
                        {label: 'Kicking', value: 'Kicking'},
                        {label: 'Spitting', value: 'Spitting'},
                        {label: 'Flopping', value: 'Flopping'},
                        {label: 'Running away', value: 'Running away'},
                        {label: 'Destroying property', value: 'Destroying property'},
                        {label: 'Flipping furniture', value: 'Flipping furniture'},
                        {label: 'Hitting self', value: 'Hitting self'},
                        {label: 'Hitting others (students)', value: 'Hitting others (students)'},
                        {label: 'Hitting others (adults)', value: 'Hitting others (adults)'},
                    ]}
                    defaultIndex={0}
                    containerStyle={{height: 100, width: 360}}
                    onChangeItem={(item) => setIncident({"behavior": item.value})}
                />
                <Text>{incident["behavior"]}</Text>
            </View>
            <View style={styles.incidentButton}>
                <Button
                    title={"Submit Behavior"}
                    type="solid" 
                    buttonStyle={{
                        background: '#1761a0',
                        borderRadius: 16,
                        margin: 1,
                        height: 50,
                        width: 360,
                        marginBottom: 30,
                    }}
                    onPress={ () => navigation.navigate('Consequence')} 
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 80,
    },
    incidentButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelHeader: {
        fontSize: 48
    }
})