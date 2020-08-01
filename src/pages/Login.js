/*import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        };
        this.validateFrom = this.validateFrom.bind(this);
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    /*
    login = (email, pass) => {
        alert('email: ' + email + 'password: ' + pass)
    }*/
    validateFrom = () => {
        const { errors } = this.state;
        const emailaddr = this.state.email;
        const pass = this.state.password;
        const reg = /^(?:\d{10}|\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$)$/;
        if (emailaddr === '') {
            errors.email = "Email address cannot be empty.";
        }
        else if (emailaddr.length > 0 && !reg.test(emailaddr)) {
            errors.email = "Please provide correct email address";
        }
        else {
            errors.email = '';
        }

        if (pass === '') {
            errors.pass = "Password cannot be empty.";
        }
        else if (pass && pass.length < 5) {
            errors.pass = "Password should be more than 5 charactres.";
        }
        else {
            errors.pass = '';
        }
        this.setState({ errors })
        if(errors.email==='' && errors.pass==='') {
            submitFrom();
        }
    }
    submitFrom = async () => {
        fetch('http://localhost:3000/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"email": this.state.email, "password": this.state.password })
        }).then((Response) => {
               Response.json()
            this.props.navigation.navigate('Home');
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const { errors } = this.state;
        return (
            <View style = {styles.container}> 
                <Text style = {[styles.title]}>LOGIN</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onchangeText = {this.handleEmail} />
                <Text>{this.state.errors.email}</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#000"
                    autoCapitalize = "none"
                    onchangeText = {this.handlePassword} />
                <Text>{this.state.errors.pass}</Text>
            
                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress = {
                    () => this.validateFrom()
                    }>
                    <Text style = {styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
                <Text style = {styles.registerButton}> Register </Text>
                <Text style = {styles.registerinfo}>For new user's click-Register</Text>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#e6ffff',
    },
    title:{
        color: '#00e6e6',
        padding: 10,
        fontSize: 40,  
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal',
        //fontWeight: 'bold'
    },
    input: {
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
    submitButton: {
        backgroundColor: '#00cccc',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 7,
        marginTop: 20,
        marginLeft: -120
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    registerButton: {
        backgroundColor: '#00cccc',
        padding: 10,
        height: 40,
        borderRadius: 7,
        display: 'flex',
        marginLeft: 130,
        marginTop: -55,
        fontWeight: 'bold'
    },
    registerinfo: {
        marginTop: 25,
        fontFamily: 'sans-serif-light',
        fontWeight: 'normal'
    }
})