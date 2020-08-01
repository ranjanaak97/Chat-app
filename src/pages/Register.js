import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class Register extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {[styles.register]}>REGISTRATION</Text>
                <TextInput style = {styles.name}
                    underlineColorAndroid = "transparent"
                    placeholder = "Name"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                />
                <TextInput style = {styles.email}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                />
                <TextInput style = {styles.phoneNo}
                    underlineColorAndroid = "transparent"
                    placeholder = "Phone No"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                />
                <TouchableOpacity style = {styles.registerButton}>
                    <Text style = {styles.registerButtonText}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.loginButton}>
                    <Text style = {styles.loginButtonText}> Login </Text>
                    
                </TouchableOpacity>
                <Text style = {styles.afterregister}>After register click login</Text>
            </View>
        );
    }
}


export default Register;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6ffff',
        flex: 2,
        
    },
    register:{
        color: '#00e6e6',
        padding: 10,
        fontSize: 40,  
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
    },
    name: {
        margin: 15,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        width: '70%',
        padding: 10,
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        borderRadius: 7,
    },
    email: {
        margin: 15,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        width: '70%',
        padding: 10,
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        borderRadius: 7,
    },
    phoneNo: {
        margin: 15,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        width: '70%',
        padding: 10,
        fontSize: 16,
        lineHeight: 20,
        color: '#000',
        borderRadius: 7,
    },
    registerButton: {
        backgroundColor: '#00cccc',
        padding: 10,
        height: 40,
        borderRadius: 7,
        display: 'flex',
        marginLeft: 130,
        marginTop: 10,
        fontWeight: 'bold'
    },
    registerButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#00cccc',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 7,
        marginTop: -40,
        marginLeft: -120
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    afterregister: {
        marginTop: 25,
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal'
    }

})