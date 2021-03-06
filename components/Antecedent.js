import React, {useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import utilities from './Utilities';

const defaultDay = () => {
    const currentDay = utilities.currentDate.getDate()
    if (currentDay < 10) {
        return `0${currentDay}`
    } else {
        return `${currentDay}`
    }
}

const defaultMinutes = () => {
    const minutes = utilities.currentDate.getMinutes()
    if (minutes < 10) {
        return `0${minutes}`
    } else {
        return `${minutes}`
    }
}   

const defaultMonth = () => {
    const currentMonth = utilities.currentDate.getMonth() + 1
    if (currentMonth < 10) {
        return `0${currentMonth}`
    } else {
        return `${currentMonth}`
    }
}

const defaultHours = () => {
    let hours = utilities.currentDate.getHours()
    if (hours > 12) {
        hours -= 12
    }
    if (hours < 10) {
        return `0${hours}`
    }
    return hours
}

export default function Antecedent({ navigation, incident, setIncident }) {

    const navigateToNextPage = () => {
        if (incident["antecedent"]) {
            navigation.navigate("Behavior")
        } else {
            alert ("Select an Antecedent")
        }
    }

    useEffect(() => {
        setIncident({"year": `${utilities.currentYear}`,
        "month": `${defaultMonth()}`,
        "hour": `${defaultHours()}`,
        "minute": `${defaultMinutes()}`,
        "day": `${defaultDay()}`})
    }, [])

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.labelHeader}>A: Antecedent</Text>
            </View>
            <View style={styles.selectionContainer}>
                <DropDownPicker
                    placeholder="Select an Antecedent"
                    labelStyle={{fontSize: 24, color: 'black', padding: 10}}
                    items={[
                        {label: 'Given direction/task/activity', value: 'Given direction/task/activity'},
                        {label: 'New task or activity', value: 'New task or activity'},
                        {label: 'Difficult task or activity', value: 'Difficult task or activity'},
                        {label: 'Waiting', value: 'Waiting'},
                        {label: 'Preferred activity interrupted', value: 'Preferred activity interrupted'},
                        {label: 'Activity/item denied (told no)', value: 'Activity/item denied (told no)'},
                        {label: 'Loud and noisy environment', value: 'Loud and noisy environment'},
                        {label: 'Given a correction', value: 'Given a correction'},
                        {label: 'Transition', value: 'Transition'},
                        {label: 'Attention given to others', value: 'Attention given to others'},
                        {label: 'Presence of specific person', value: 'Presence of specific person'},
                        {label: 'Attention not given when wanted', value: 'Attention not given when wanted'},
                        {label: 'Alone (no activity)', value: 'Alone (no activity)'},
                        {label: 'Alone (no attention)', value: 'Alone (no attention)'}
                    ]}
                    itemStyle={{justifyContent: 'flex-start'}}
                    defaultIndex={0}
                    dropDownMaxHeight={375}
                    dropDownStyle={{backgroundColor: '#f8f8ff'}}
                    containerStyle={{
                        height: 100, 
                        width: 360, 
                        shadowColor: 'black',
                        shadowOpacity: 0.4,
                        shadowOffset: {width: 1, height: 1}
                    }}
                    onChangeItem={(item) => setIncident({...incident, "antecedent": item.value})}
                />
            </View>
            <View style={styles.incidentButton}>
                <Button
                    title={"Submit Antecedent"}
                    type="solid" 
                    buttonStyle={{
                        background: '#1761a0',
                        borderRadius: 16,
                        margin: 1,
                        height: 50,
                        width: 360,
                        marginBottom: 30,
                        shadowColor: 'black',
                        shadowOpacity: 0.4,
                        shadowOffset: {width: 2, height: 2}
                    }}
                    onPress={navigateToNextPage} 
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