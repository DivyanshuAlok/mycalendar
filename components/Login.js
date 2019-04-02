import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StackNavigator } from 'react-navigation';




export default class Login extends Component<Props> {

  componentWillMount(){
  var config = {
    apiKey: "AIzaSyAUyqSF8zSRek27vHwSDc1RB_Jhd_kwdA0",
    authDomain: "mycalendar-b321c.firebaseapp.com",
    databaseURL: "https://mycalendar-b321c.firebaseio.com",
    projectId: "mycalendar-b321c",
    storageBucket: "mycalendar-b321c.appspot.com",
    messagingSenderId: "588291232380"
  };
    try{
      const firebaseApp = firebase.initializeApp(firebaseConfig);
    }
    catch(error){
    
    }
}

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>
          <Image style={styles.logo} source={require('./logo.png')} />
          </Text>        
        </View>
        <View style={styles.formContainer}>
          <View>
              <TextInput style = {styles.formElement}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.formElement}
               underlineColorAndroid = "transparent"
               placeholder = "Key"
               autoCapitalize = "none"/>
          </View> 
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>
             Login
            </Text>
          </TouchableOpacity>   
        </View>
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
    width: DEVICE_WIDTH - 100,
    borderRadius: 30,
    color: 'white',
    marginBottom: DEVICE_HEIGHT - 650 ,
    textAlignVertical: 'center',
    zIndex: 11,

  },
  formElement:{
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    height: 50,
    width: DEVICE_WIDTH - 60,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 20,

  },
  formContainer:{

  }

});
