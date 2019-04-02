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
  Picker,
  Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';

                
export default class Category extends Component{
  state = {
    type: '',
    username: this.props.uname,
    key: this.props.pwd
  }
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
 regFinal(){ 
    console.log(this.state.type);

    if(this.state.type == 't'){
      var ind = this.state.email.indexOf('@')
      var newuname = this.state.email.slice(0,ind)
      firebase.database().ref('auth/'+newuname).set(
        {
          uname: this.state.username,
          key: this.state.key,
          cat: 'Host'
        })
      Alert.alert('Registration Successful')
      Actions.Login()
    }

    else{
      var ind = this.state.email.indexOf('@')
      var newuname = this.state.email.slice(0,ind)
      firebase.database().ref('auth/'+newuname).set(
        {
          uname: this.state.username,
          key: this.state.key,
          cat: 'User'
        })
      Alert.alert('Registration Successful')
      Actions.Login()
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
            <Picker style = {styles.picker}
              selectedValue = {this.state.type}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="User Type" value="none" />
              <Picker.Item label="Host" value="t" />
              <Picker.Item label="User" value="f" />
            </Picker>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => this.regFinal()}>
            <Text style={styles.button}>
             SignUp
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
    zIndex: 11,
  },
  buttonsContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    fontFamily: 'gotham rounded',
    backgroundColor: '#FF5864',
    textAlign: 'center',
    fontSize: 25,
    alignItems: 'center',
    height: 45,
    width: DEVICE_WIDTH - 100,
    borderRadius: 30,
    color: 'white',
    marginBottom: 50,
    textAlignVertical: 'center',
    zIndex: 11,

  },
  formContainer:{
    flex: 1,
    width: DEVICE_WIDTH - 60,
    height: 45,
  },
  picker:{
    flex: 1,
    width: DEVICE_WIDTH - 60,
    borderRadius: 10,
    marginBottom: 50,
  }

});