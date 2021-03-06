import React from 'react';
import { TextInput, View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';

import utilities from './Utilities';

import { Formik } from 'formik';

export default function LoginForm({ navigation }) {

    const loginUser = (values) => {
        fetch(`${utilities.baseURL}/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password
            })
        }).then(response => response.json())
            .then(data => utilities.authorizeUser(data, navigation))
        }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../assets/abc_logo_white.png')}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => loginUser(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Email"
                            placeholderTextColor="#f8f8ff"
                        />
                        <TextInput 
                            secureTextEntry={true} 
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Password"
                            placeholderTextColor="#f8f8ff"
                        />
                        <Button 
                            type="solid" 
                            title={"LOG IN"} 
                            titleStyle={{color: "#1761a0"}}
                            buttonStyle={{
                                backgroundColor: '#f8f8ff',
                                borderRadius: 16,
                                margin: 1,
                                marginTop: 25,
                                height: 50,
                                width: 360, 
                                shadowColor: 'black',
                                shadowOpacity: 0.4,
                                shadowOffset: {width: 2, height: 2}
                            }} 
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            <View noBorder style={styles.details}>
                <Text style={styles.detailText}>Forgot Password?</Text>
                <Text style={styles.detailText}>|</Text>
                <Text style={styles.detailText}
                    onPress={() => navigation.navigate('Register')}
                >Create Account</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailText: {
        color: '#f8f8ff',
        margin: 7
    },
    details: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 250,
        width: 250,
    },
    container: {
        flex: 1,
        backgroundColor: '#1761a0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderRadius: 10,
        width: '85%',
        height: 60,
        backgroundColor: '#4c96d7',
        fontSize: 24,
        paddingLeft: 20,
        marginBottom: 20,
        color: '#f8f8ff',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2}
    },
});