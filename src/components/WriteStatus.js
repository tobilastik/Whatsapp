import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class WriteStatus extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render () {
    return (
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type a status"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Octicons name="smiley" size={30} color={'white'} />
          <Material name="format-text" size={30} color={'white'} />
          <Ionicons name="md-color-palette" size={30} color={'white'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  textAreaContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
  },
  textArea: {
    flex: 1,
    height: '90%',
    justifyContent: 'flex-start',
    fontSize: 50,
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    color: 'red',
  },
});
