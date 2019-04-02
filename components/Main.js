import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';


export default class Main extends Component<Props> {
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
            <Text style={styles.button} onPress = { () => Actions.Login() }>
             Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.button} onPress = { () => Actions.SignUp() }>
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

