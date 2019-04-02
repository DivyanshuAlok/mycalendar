import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Dimensions from 'Dimensions';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Ricoh from './Ricoh';

export default class Reminder extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Month
          </Text>
        </View>
        <Calendar style={styles.calendar}/>
        <ScrollView style={styles.scrollViewContainer}>
          <Ricoh/>
          <Ricoh/>
          <Ricoh/>
          <Ricoh/>
        </ScrollView>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header:{
    width: DEVICE_WIDTH,
    backgroundColor: '#5484ed',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  calendar:{
    width: DEVICE_WIDTH,
    borderColor: 'gray',
    height: 300,
  }

});
