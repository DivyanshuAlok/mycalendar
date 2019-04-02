import React, { Component } from 'react';

import {   Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput, } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Dimensions from 'Dimensions';
import Login from './Login';
import SignUp from './SignUp';


class Main extends Component {

 FunctionToOpenSecondActivityLogin = () =>
 {
    this.props.navigation.navigate('Login');
    
 }
 FunctionToOpenSecondActivitySignup = () =>
 {
    this.props.navigation.navigate('SignUp');
    
 }

 render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>
          <Image style={styles.logo} source={require('./logo.png')} />
          </Text>        
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Text style={styles.button} onPress = { this.FunctionToOpenSecondActivityLogin }>
             Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button} onPress = { this.FunctionToOpenSecondActivitySignup} >
             Sign Up
            </Text>
          </TouchableOpacity>    
        </View>
      </View>
    );
  }
}



class Login1 extends Component
{

 render()
 {
    return(
       <View style = { style.MainContainer }>

          <Text style = { style.TextStyle }> This is SecondActivity </Text>

       </View>
    );
 }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo:{
  },
  buttonsContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    fontFamily: 'gotham rounded',
    backgroundColor: '#5484ed',
    textAlign: 'center',
    fontSize: 25,
    alignItems: 'center',
    height: 45,
    width: DEVICE_WIDTH - 60,
    borderRadius: 30,
    color: 'white',
    marginBottom: 7,
    textAlignVertical: 'center',
  },

});

export default Project = StackNavigator(
{
 Main: { screen: Main },
 
 Login: { screen: Login },

 SignUp: { screen: SignUp }
});

const style = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10
  
 },

 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },

});