import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Dimensions from 'Dimensions';

export default class Ricoh extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subject}>
        im awesome
        </Text>
        <Text style={styles.description}>
        The loading indicator next to month name will be displayed if has displayLoadingIndicator pr or special marking value to all days in markedDates collection.
        </Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: '#eff0f1',
    borderBottomWidth: 3,
    marginBottom : 3,
    paddingBottom : 3,
    borderRadius: 10,
    zIndex: 10,
  },
  subject:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  description:{
    fontSize: 15,
  }
});
